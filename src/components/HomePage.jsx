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



    async function query(data) {
        const response = await fetch(
            "http://localhost:3000/api/v1/prediction/2b26edb3-339f-4f5a-89f2-1c67b334aeb7",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );
        const result = await response.json();
        return result;
    }

    query({ "question": "Hey, how are you?" }).then((response) => {
        console.log(response);
    });
}



export default HomePage;
