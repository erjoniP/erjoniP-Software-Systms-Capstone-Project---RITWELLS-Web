import React from 'react';
import { Link } from 'react-router-dom';
import './ProgramsPage.css';


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
        }}>
            <h1 style={{ color: 'white', marginBottom: '20px' }}>Available Programs</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
                <Link to="/hypertrophy" className="program-button">Hypertrophy Program</Link>
                <Link to="/weight-loss" className="program-button">Weight Loss Program</Link>
                <Link to="/movement-snack" className="program-button">Movement Snack Program</Link>
            </div>
        </div>
    );
}

export default ProgramsPage;