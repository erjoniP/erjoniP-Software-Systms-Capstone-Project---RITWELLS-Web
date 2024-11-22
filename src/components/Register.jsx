import React, { useState } from 'react';
import { auth } from './firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; 
import { firestore } from './firebaseConfig';
import './Register.css';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const userDocRef = doc(firestore, 'users', user.uid);
            await setDoc(userDocRef, {
                Name: name,
                Email: email,
            });
            
            console.log("User data successfully written to Firestore.");
            navigate('/')
        } catch (err) {
            setError(err.message);
        }
    };

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
                <div className="register-container">
                    <h2>Register</h2>
                    <form id="register-form" onSubmit={handleRegister}>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
    
}

export default Register
