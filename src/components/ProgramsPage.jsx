import React from 'react';
import { Link } from 'react-router-dom';

function ProgramsPage() {
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
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            color: '#fff'
        }}>
            <h1>Available Programs</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><Link to="/hypertrophy" style={{ color: '#fff' }}>Hypertrophy Program</Link></li>
                <li><Link to="/weight-loss" style={{ color: '#fff' }}>Weight Loss Program</Link></li>
                <li><Link to="/movement-snack" style={{ color: '#fff' }}>Movement Snack Program</Link></li>
            </ul>
        </div>
    );
}

export default ProgramsPage;