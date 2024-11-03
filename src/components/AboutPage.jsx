import React from 'react';

function AboutPage() {
    return (
        <div style={{
            padding: '40px',
            backgroundColor: '#f4f4f4',
            borderRadius: '10px',
            maxWidth: '800px',
            margin: '50px auto',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
        }}>
            <h1 style={{ color: '#333', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>About Us</h1>
            <p style={{ lineHeight: '1.8', fontSize: '1.2rem', color: '#444' }}>
                At Ritwells, we believe that true wellness goes beyond physical fitness. Our approach is rooted in preventive health, emphasizing the importance of nurturing the body, mind, and overall well-being. We understand that lasting health and vitality come from a balance of various aspects of life, including mental, emotional, and social wellness.
            </p>
            <p style={{ lineHeight: '1.8', fontSize: '1.2rem', color: '#444' }}>
                Our programs are designed to support holistic health by integrating physical training with mindfulness practices, nutritional guidance, and strategies for maintaining mental health. At Ritwells, we strive to empower our clients with the tools they need to lead healthier, more fulfilling lives by focusing on prevention rather than reaction.
            </p>
            <p style={{ lineHeight: '1.8', fontSize: '1.2rem', color: '#444' }}>
                Join us in redefining what it means to be healthy and discover how a comprehensive approach to wellness can transform your lifestyle.
            </p>
        </div>
    );
}

export default AboutPage;
