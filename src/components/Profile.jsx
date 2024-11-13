import React, { useEffect, useState } from 'react';
import { auth, firestore } from './firebaseConfig';

function Profile() {
    const [user, setUser] = useState(null);
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;
            if (user) {
                const userDoc = await firestore.collection('users').doc(user.uid).get();
                if (userDoc.exists) {
                    setUser(userDoc.data());
                    setName(userDoc.data().name);
                }
            }
        };
        fetchUserData();
    }, []);

    const handleLogout = () => {
        auth.signOut();
    };

    const handleUpdate = async () => {
        try {
            const user = auth.currentUser;
            await firestore.collection('users').doc(user.uid).update({ name });
            setUser({ ...user, name });
        } catch (err) {
            setError(err.message);
        }
    };

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h2>Profile</h2>
            <p>Email: {user.email}</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleUpdate}>Update Name</button>
            <button onClick={handleLogout}>Logout</button>
            {error && <p>{error}</p>}
        </div>
    );
}

export default Profile;