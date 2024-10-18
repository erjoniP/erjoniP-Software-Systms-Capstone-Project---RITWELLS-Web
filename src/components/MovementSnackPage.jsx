import React, { useState } from 'react';
import './MovementSnackProgram.css'


const workoutPlan = {
    snack1: [
        { name: 'Bodyweight Squats', alternatives: ['Wall Sit', 'Step-ups'], duration: '1 minute' },
        { name: 'Lunges', alternatives: ['Step-back Lunges', 'Walking Lunges'], duration: '1 minute' },
        { name: 'Jumping Jacks', alternatives: ['Mountain Climbers', 'High Knees'], duration: '1 minute' }
    ],
    snack2: [
        { name: 'Push-ups', alternatives: ['Knee Push-ups', 'Incline Push-ups'], duration: '1 minute' },
        { name: 'Plank', alternatives: ['Side Plank', 'Plank with Shoulder Taps'], duration: '1 minute' },
        { name: 'Arm Circles', alternatives: ['Shoulder Taps', 'Tricep Dips'], duration: '1 minute' }
    ],
    snack3: [
        { name: 'Cat-Cow Stretch', alternatives: ['Child Pose', 'Downward Dog'], duration: '1 minute' },
        { name: 'Hip Bridges', alternatives: ['Glute Bridge', 'Single-leg Bridge'], duration: '1 minute' },
        { name: 'Dynamic Stretching', alternatives: ['Standing Toe Touches', 'Arm Swings'], duration: '1 minute' }
    ]
};

function MovementSnackPage() {
    const [snack, setSnack] = useState('snack1');
    const [logs, setLogs] = useState({});

    const handleLogChange = (exerciseName, type, value) => {
        setLogs(prev => ({
            ...prev,
            [exerciseName]: { ...prev[exerciseName], [type]: value }
        }));
    };

    const saveLog = () => {
        localStorage.setItem('movementSnackPageLogs', JSON.stringify(logs));
        alert("Movement snack logged successfully!");
    };

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
            <h1 style={{ color: '#fff' }}>Movement Snack Program - Snack {snack.replace('snack', '')}</h1>

            <div className="snack-selector">
                <label style={{ color: '#fff' }}>Choose Snack:</label>
                <select value={snack} onChange={(e) => setSnack(e.target.value)} style={{ padding: '10px', marginLeft: '10px' }}>
                    <option value="snack1">Snack 1 (Lower Body)</option>
                    <option value="snack2">Snack 2 (Upper Body & Core)</option>
                    <option value="snack3">Snack 3 (Full Body Mobility)</option>
                </select>
            </div>

            <div className="exercise-grid" style={{ marginTop: '20px' }}>
                {workoutPlan[snack].map((exercise, index) => (
                    <div key={index} className="exercise-row" style={{ marginBottom: '20px', color: '#fff' }}>
                        <label>
                            Exercise:
                            <select onChange={(e) => handleLogChange(exercise.name, 'exercise', e.target.value)} style={{ padding: '10px', marginLeft: '10px' }}>
                                <option value={exercise.name}>{exercise.name}</option>
                                {exercise.alternatives.map((alt, i) => (
                                    <option key={i} value={alt}>{alt}</option>
                                ))}
                            </select>
                        </label>
                        <div className="sets-reps" style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <label>Duration: {exercise.duration}</label>
                            <label>
                                Duration Performed:
                                <input type="text" onChange={(e) => handleLogChange(exercise.name, 'duration', e.target.value)} style={{ padding: '10px', marginLeft: '10px' }} />
                            </label>
                        </div>
                    </div>
                ))}
            </div>


            <button onClick={saveLog} style={{
                marginTop: '20px',
                backgroundColor: '#6a5acd',
                color: 'white',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease, transform 0.3s ease'
            }}>
                Log Movement Snack
            </button>
        </div>
    );
}

export default MovementSnackPage;