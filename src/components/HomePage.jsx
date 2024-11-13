import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
    return (
        <div className="homepage-container">
            <div className="hero-section">
                <h1>Keep Becoming</h1>
                <p>Unlock your potential with tailored coaching</p>
                <Link to="/services" className="btn-primary">View services</Link>
            </div>
        </div>
    );
}

export default HomePage;
