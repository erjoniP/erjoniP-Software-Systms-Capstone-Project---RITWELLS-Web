import React from 'react';

function PersonalTraining() {
    return (
        <div style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            width: '100%',
            maxWidth: '1200px',
            padding: '30px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
        }}>
            <h1 style={{ color: '#fff' }}>Personal Training Programs</h1>
            <p style={{ color: '#fff' }}>
                Explore our wide variety of personalized workout programs tailored to your fitness goals.
            </p>
            <ul style={{ color: '#fff', listStyleType: 'none', padding: 0 }}>
                <li>1. Bro Split Program</li>
                <li>2. Push/Pull/Legs Program</li>
                <li>3. Upper/Lower Split Program</li>
                <li>4. Full Body Program</li>
            </ul>
        </div>
    );
}

export default PersonalTraining;