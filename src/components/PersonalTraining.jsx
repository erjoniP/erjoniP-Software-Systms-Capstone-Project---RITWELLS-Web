import React from 'react';
import johnProfile from '../assets/dynamic-male-fitness-trainer-ai-generated_921479-36106.jpg';
import janeProfile from '../assets/energetic-female-fitness-trainer-ai-generated_921479-36045.jpg';

function PersonalTraining() {
    const coaches = [
        {
            name: 'John Doe',
            profilePic: johnProfile, 
            contact: 'johndoe@example.com',
            bio: 'John is a certified personal trainer with 10 years of experience specializing in strength training and nutrition.'
        },
        {
            name: 'Jane Smith',
            profilePic: janeProfile, 
            contact: 'janesmith@example.com',
            bio: 'Jane is an experienced fitness coach focusing on high-intensity interval training (HIIT) and functional fitness for all levels.'
        }
    ];

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
            <h1 style={{ color: '#fff', marginBottom: '20px' }}>Choose Your Personal Trainer</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '30px'
            }}>
                {coaches.map((coach, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#333',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                    }}>
                        <img
                            src={coach.profilePic}
                            alt={`${coach.name}'s profile`}
                            style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', marginBottom: '15px' }}
                        />
                        <h2 style={{ color: '#fff' }}>{coach.name}</h2>
                        <p style={{ color: '#bbb' }}><strong>Contact:</strong> {coach.contact}</p>
                        <p style={{ color: '#fff', textAlign: 'center', maxWidth: '600px' }}>{coach.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PersonalTraining;