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
        const existingLogs = JSON.parse(localStorage.getItem('upperLowerProgramLogs')) || {};

        const updatedLogs = {
            ...existingLogs,
            [day]: {
                ...(existingLogs[day] || {}),
                ...logs,
            },
        };

        localStorage.setItem('upperLowerProgramLogs', JSON.stringify(updatedLogs));
        alert('Workout logged successfully!');
        console.log('Workout logged:', updatedLogs);
    };

    return (
        <div className="ppl-page-container">
            <div className="workout-tips">
                <h2>Movement Tips</h2>
                <ul>
                    <li>Incorporate movement snacks throughout the day.</li>
                    <li>Focus on form and controlled movement.</li>
                    <li>Stay hydrated and take breaks as needed.</li>
                </ul>
            </div>

            <div className="ppl-program-content">
                <h1>Movement Snack Program - Snack {snack.replace('snack', '')}</h1>

                <div className="day-selector">
                    <label>Choose Snack:</label>
                    <select value={snack} onChange={(e) => setSnack(e.target.value)}>
                        <option value="snack1">Snack 1 (Lower Body)</option>
                        <option value="snack2">Snack 2 (Upper Body & Core)</option>
                        <option value="snack3">Snack 3 (Full Body Mobility)</option>
                    </select>
                </div>

                <div className="exercise-grid">
                    {workoutPlan[snack].map((exercise, index) => (
                        <div key={index} className="exercise-row">
                            <label>Exercise:
                                <select onChange={(e) => handleLogChange(exercise.name, 'exercise', e.target.value)}>
                                    <option value={exercise.name}>{exercise.name}</option>
                                    {exercise.alternatives.map((alt, i) => (
                                        <option key={i} value={alt}>{alt}</option>
                                    ))}
                                </select>
                            </label>
                            <div className="sets-reps">
                                <label>Duration: {exercise.duration}</label>
                                <label>
                                    Duration Performed:
                                    <input type="text" onChange={(e) => handleLogChange(exercise.name, 'duration', e.target.value)} />
                                </label>
                            </div>
                        </div>
                    ))}
                </div>

                <button onClick={saveLog} className="btn-save">Log Movement Snack</button>
            </div>
        </div>
    );
}


export default MovementSnackPage;