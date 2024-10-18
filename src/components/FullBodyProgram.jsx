import React, { useState } from 'react';
import './FullBodyProgram.css';

const workoutPlan = {
    day1: [
        { name: 'Barbell Bench Press', alternatives: ['Dumbbell Bench Press', 'Chest Press Machine'], sets: 4, reps: '8-12' },
        { name: 'Barbell Squats', alternatives: ['Leg Press', 'Hack Squat'], sets: 4, reps: '8-12' },
        { name: 'Pull-ups', alternatives: ['Lat Pulldown', 'Pull-up Machine'], sets: 4, reps: '8-12' },
        { name: 'Overhead Press', alternatives: ['Dumbbell Shoulder Press', 'Machine Shoulder Press'], sets: 3, reps: '10-12' },
        { name: 'Barbell Curls', alternatives: ['Dumbbell Curls', 'Preacher Curls'], sets: 3, reps: '10-12' }
    ],
    day2: [
        { name: 'Incline Bench Press', alternatives: ['Incline Dumbbell Press', 'Incline Chest Press Machine'], sets: 4, reps: '8-12' },
        { name: 'Deadlift', alternatives: ['Romanian Deadlift', 'Rack Pulls'], sets: 4, reps: '8-12' },
        { name: 'Barbell Rows', alternatives: ['Dumbbell Rows', 'Seated Rows'], sets: 4, reps: '8-12' },
        { name: 'Lateral Raises', alternatives: ['Cable Lateral Raises', 'Dumbbell Lateral Raises'], sets: 3, reps: '10-15' },
        { name: 'Tricep Dips', alternatives: ['Skull Crushers', 'Tricep Pushdowns'], sets: 3, reps: '10-12' }
    ],
    day3: [
        { name: 'Chest Dips', alternatives: ['Machine Chest Press', 'Push-Ups'], sets: 4, reps: '8-12' },
        { name: 'Leg Curls', alternatives: ['Romanian Deadlift', 'Hamstring Curls'], sets: 4, reps: '8-12' },
        { name: 'Chin-Ups', alternatives: ['Lat Pulldown', 'Pull-up Machine'], sets: 4, reps: '8-12' },
        { name: 'Rear Delt Flyes', alternatives: ['Reverse Pec Deck', 'Cable Rear Delt Flyes'], sets: 3, reps: '10-15' },
        { name: 'Hammer Curls', alternatives: ['Concentration Curls', 'Cable Curls'], sets: 3, reps: '10-12' }
    ]
};

function FullBodyProgram() {
    const [day, setDay] = useState('day1');
    const [logs, setLogs] = useState({});

    const handleLogChange = (exerciseName, type, value) => {
        setLogs(prev => ({
            ...prev,
            [exerciseName]: { ...prev[exerciseName], [type]: value }
        }));
    };

    const saveLog = () => {
        localStorage.setItem('fullBodyProgramLogs', JSON.stringify(logs));
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
            <h1 style={{ color: '#fff' }}>Full Body Program - Day: {day === 'fullBodyA' ? 'A' : day === 'fullBodyB' ? 'B' : 'C'}</h1>

            <div className="day-selector">
                <label style={{ color: '#fff' }}>Choose Day:</label>
                <select value={day} onChange={(e) => setDay(e.target.value)} style={{ padding: '10px', marginLeft: '10px' }}>
                    <option value="fullBodyA">Day A</option>
                    <option value="fullBodyB">Day B</option>
                    <option value="fullBodyC">Day C</option>
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
                            <label>Sets: {exercise.sets}</label>
                            <label>Reps: {exercise.reps}</label>
                            <label>
                                Sets Performed:
                                <input type="number" onChange={(e) => handleLogChange(exercise.name, 'sets', e.target.value)} style={{ padding: '10px', marginLeft: '10px' }} />
                            </label>
                            <label>
                                Reps Performed:
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

export default FullBodyProgram;
