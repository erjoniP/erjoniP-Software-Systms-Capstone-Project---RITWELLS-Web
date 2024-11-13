import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebaseConfig';
import './Navbar.css'

function Navbar() {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return unsubscribe;
    }, []);

    const handleLogout = () => {
        auth.signOut();
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">Ritwells</div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>

                {user ? (
                    <>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><button onClick={handleLogout} className="contact-btn">Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/register" className="contact-btn">Register Now</Link></li>
                        <li><Link to="/login" className="contact-btn">Sign In</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
