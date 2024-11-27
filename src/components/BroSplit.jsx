import React, { useState } from 'react';
import './PPL.css';

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
                <h2>Workout Tips</h2>
                <ul>
                    <li>Focus on progressive overload for muscle growth.</li>
                    <li>Take 60-90 seconds of rest between sets.</li>
                    <li>Use full range of motion for every exercise.</li>
                    <li>Control the eccentric (lowering) phase of each exercise.</li>
                    <li>Maintain proper form to avoid injuries.</li>
                </ul>
            </div>

            <div className="ppl-program-content"> 
                <h1>Bro Split Program - Day: {day.charAt(0).toUpperCase() + day.slice(1)}</h1>

                <div className="day-selector">
                    <label>Choose Day:</label>
                    <select value={day} onChange={(e) => setDay(e.target.value)}>
                        <option value="chest">Chest</option>
                        <option value="back">Back</option>
                        <option value="legs">Legs</option>
                        <option value="shoulders">Shoulders</option>
                        <option value="arms">Arms</option>
                    </select>
                </div>

                <div className="exercise-grid">
                    {workoutPlan[day].map((exercise, index) => (
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
                                <label>Sets: {exercise.sets}</label>
                                <label>Reps: {exercise.reps}</label>
                                <label>Sets Performed:
                                    <input type="number" onChange={(e) => handleLogChange(exercise.name, 'sets', e.target.value)} />
                                </label>
                                <label>Reps Performed:
                                    <input type="number" onChange={(e) => handleLogChange(exercise.name, 'reps', e.target.value)} />
                                </label>
                            </div>
                        </div>
                    ))}
                </div>

                <button onClick={saveLog} className="btn-save">Log Workout</button>
            </div>
        </div>
    );
}

export default BroSplit;