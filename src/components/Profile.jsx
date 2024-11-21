import React, { useEffect, useState } from 'react';
import { auth, firestore } from './firebaseConfig';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';

function Profile() {
    const [user, setUser] = useState(null);
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const currentUser = auth.currentUser;
                if (currentUser) {
                    const userDocRef = doc(firestore, 'users', currentUser.uid);
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        setUser(userData);
                        setName(userData.Name || '');
                    } else {
                        setError('User document not found.');
                    }
                }
            } catch (err) {
                setError('Failed to fetch user data.');
            }
        };

        fetchUserData();
    }, []);

    const handleLogout = () => {
        auth.signOut();
    };

    const handleUpdate = async () => {
        try {
            const currentUser = auth.currentUser;
            if (!currentUser) {
                setError('No user is currently logged in.');
                return;
            }

            const userRef = doc(firestore, 'users', currentUser.uid);
            const userDoc = await getDoc(userRef);

            if (userDoc.exists()) {
                const updatedUserData = userDoc.data();
                setUser(updatedUserData); 
            }

            alert('Name updated successfully!');
        } catch (err) {
            setError(`Error updating name: ${err.message}`);
        }
    };

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                width: '100%',
                maxWidth: '1200px',
                padding: '30px',
                borderRadius: '10px',

            }}>
            <div className="profile-container">
                <div className="profile-box">
                    <h2>Profile</h2>
                    {user && user.Email ? (
                        <p>Email: {user.Email}</p>
                    ) : (
                        <p>Email: {auth.currentUser ? auth.currentUser.email : 'Loading...'}</p>
                    )}
                    <input
                        type="text"
                        value={name}
                        placeholder="Update Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Update Name</button>
                    <button onClick={handleLogout}>Logout</button>
                    {error && <p className="profile-error">{error}</p>}
                </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;