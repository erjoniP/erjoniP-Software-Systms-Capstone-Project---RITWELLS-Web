import React from 'react';
import { Link } from 'react-router-dom'
import './HomePage.css';

function HomePage() {
    return (
        <div className="homepage-container">
            <div className="navbar">
                <div className="navbar-logo">Ritwells</div>
                <ul className="navbar-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact" className="contact-btn">Contact</a></li>
                </ul>
            </div>
        

            <div className="hero-section">
                <h1>Keep Becoming</h1>
                <p>Unlock your potential with tailored coaching</p>
                <a href="/services" className="btn-primary">View services</a>
            </div>
        </div>
    );
}

export default HomePage;
