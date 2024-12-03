import React, { useEffect, useState } from 'react';
import { auth, firestore } from './firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc, collection, getDocs } from 'firebase/firestore';
import './Profile.css';

function Profile() {
    const [user, setUser] = useState(null);
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [workouts, setWorkouts] = useState([]);
    const navigate = useNavigate();

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

                    const workoutsRef = collection(firestore, 'users', currentUser.uid, 'workouts');
                    const workoutsSnapshot = await getDocs(workoutsRef);
                    const workoutsList = workoutsSnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));

                    setWorkouts(workoutsList);
                }
            } catch (err) {
                console.error('Error fetching user data:', err);
                setError('Failed to fetch user data.');
            }
        };

        fetchUserData();
    }, []);

    const handleLogout = () => {
        auth.signOut();
        navigate('/')
    };

    const handleUpdate = async () => {
        try {
            const currentUser = auth.currentUser;
            if (!currentUser) {
                setError('No user is currently logged in.');
                return;
            }

            const userRef = doc(firestore, 'users', currentUser.uid);
            await updateDoc(userRef, { Name: name });
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
                        <div className="button-container">
                            <button className="update-btn" onClick={handleUpdate}>
                                Update Name
                            </button>
                            <button className="logout-btn" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                        {error && <p className="profile-error">{error}</p>}
                    </div>
                    <div className="workout-log">
                        <h3>Your Workouts</h3>
                        {workouts.length > 0 ? (
                            workouts.map((log, index) => (
                                <div key={index} className="workout-log-item">
                                    <h4>{log.programName}</h4>
                                    <p>Date: {new Date(log.date).toLocaleDateString()}</p>
                                    <ul>
                                        {Object.entries(log.exercises).map(([exercise, details], idx) => (
                                            <li key={idx}>
                                                {exercise}: {details.sets} sets, {details.reps} reps
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        ) : (
                            <p>No workouts logged yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;