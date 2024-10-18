import React, { useState } from 'react';
import './BroSplit.css';

const workoutPlan = {
    chest: [
        { name: 'Bench Press', alternatives: ['Dumbbell Press', 'Chest Press Machine'] },
        { name: 'Incline Bench Press', alternatives: ['Incline Dumbbell Press', 'Incline Chest Press Machine'] },
        { name: 'Chest Flyes', alternatives: ['Cable Crossovers', 'Pec Deck'] }
    ],
    back: [
        { name: 'Pull-ups', alternatives: ['Lat Pulldown', 'Pull-up Machine'] },
        { name: 'Deadlift', alternatives: ['Romanian Deadlift', 'Rack Pulls'] },
        { name: 'Barbell Rows', alternatives: ['Dumbbell Rows', 'Seated Rows'] }
    ],
    legs: [
        { name: 'Squat', alternatives: ['Leg Press', 'Hack Squat'] },
        { name: 'Lunges', alternatives: ['Bulgarian Split Squat', 'Leg Extension'] },
        { name: 'Leg Curls', alternatives: ['Romanian Deadlift', 'Hamstring Curls'] }
    ],
    shoulders: [
        { name: 'Overhead Press', alternatives: ['Dumbbell Shoulder Press', 'Machine Shoulder Press'] },
        { name: 'Lateral Raises', alternatives: ['Cable Lateral Raises', 'Dumbbell Lateral Raises'] },
        { name: 'Rear Delt Flyes', alternatives: ['Reverse Pec Deck', 'Cable Rear Delt Flyes'] }
    ],
    arms: [
        { name: 'Barbell Curls', alternatives: ['Dumbbell Curls', 'Preacher Curls'] },
        { name: 'Tricep Dips', alternatives: ['Skull Crushers', 'Tricep Pushdowns'] },
        { name: 'Hammer Curls', alternatives: ['Concentration Curls', 'Cable Curls'] }
    ]
};

function BroSplit() {
    const [day, setDay] = useState('chest');
    const [logs, setLogs] = useState({});

    const handleLogChange = (exerciseName, type, value) => {
        setLogs(prev => ({
            ...prev,
            [exerciseName]: { ...prev[exerciseName], [type]: value }
        }));
    };

    const saveLog = () => {
        localStorage.setItem('broSplitLogs', JSON.stringify(logs));
        alert("Workout logged successfully!");
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
            <h1 style={{ color: '#fff' }}>Bro Split Program - Day 1: {day.charAt(0).toUpperCase() + day.slice(1)}</h1>

            <div className="day-selector">
                <label style={{ color: '#fff' }}>Choose Day:</label>
                <select value={day} onChange={(e) => setDay(e.target.value)} style={{ padding: '10px', marginLeft: '10px' }}>
                    <option value="chest">Chest</option>
                    <option value="back">Back</option>
                    <option value="legs">Legs</option>
                    <option value="shoulders">Shoulders</option>
                    <option value="arms">Arms</option>
                </select>
            </div>

            
            <div className="exercise-grid" style={{ marginTop: '20px' }}>
                {workoutPlan[day].map((exercise, index) => (
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
                            <label>
                                Sets:
                                <input type="number" onChange={(e) => handleLogChange(exercise.name, 'sets', e.target.value)} style={{ padding: '10px', marginLeft: '10px' }} />
                            </label>
                            <label>
                                Reps:
                                <input type="number" onChange={(e) => handleLogChange(exercise.name, 'reps', e.target.value)} style={{ padding: '10px', marginLeft: '10px' }} />
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
                Log Workout
            </button>
        </div>
    );
}

export default BroSplit;