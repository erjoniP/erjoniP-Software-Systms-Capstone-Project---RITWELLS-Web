import React, { useState } from 'react';
import { auth, firestore } from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Register.css';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            console.log("Registering with:", email, password);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User registered:", userCredential.user.uid);
            await firestore.collection('users').doc(userCredential.user.uid).set({
                name: name,
                email: email,
            });
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
