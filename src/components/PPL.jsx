import React, { useState } from 'react';
import './PPL.css';

const workoutPlan = {
    push: [
        { name: 'Barbell Bench Press', alternatives: ['Dumbbell Bench Press', 'Chest Press Machine'], sets: 4, reps: '8-12' },
        { name: 'Overhead Press', alternatives: ['Dumbbell Shoulder Press', 'Machine Shoulder Press'], sets: 4, reps: '8-12' },
        { name: 'Tricep Dips', alternatives: ['Skull Crushers', 'Tricep Pushdowns'], sets: 3, reps: '10-15' }
    ],
    pull: [
        { name: 'Pull-ups', alternatives: ['Lat Pulldown', 'Pull-up Machine'], sets: 4, reps: '8-12' },
        { name: 'Barbell Rows', alternatives: ['Dumbbell Rows', 'Seated Rows'], sets: 4, reps: '8-12' },
        { name: 'Barbell Curls', alternatives: ['Dumbbell Curls', 'Preacher Curls'], sets: 3, reps: '10-15' }
    ],
    legs: [
        { name: 'Squats', alternatives: ['Leg Press', 'Hack Squat'], sets: 4, reps: '8-12' },
        { name: 'Romanian Deadlift', alternatives: ['Hamstring Curls', 'Good Mornings'], sets: 4, reps: '8-12' },
        { name: 'Lunges', alternatives: ['Step Ups', 'Leg Extensions'], sets: 3, reps: '10-15' }
    ]
};

function PPLProgram() {
    const [day, setDay] = useState('push');
    const [logs, setLogs] = useState({});

    const handleLogChange = (exerciseName, type, value) => {
        setLogs(prev => ({
            ...prev,
            [exerciseName]: { ...prev[exerciseName], [type]: value }
        }));
    };

    const saveLog = () => {
        localStorage.setItem('pplProgramLogs', JSON.stringify(logs));
        alert("Workout logged successfully!");
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
                <h1>Push/Pull/Legs Program - Day: {day.charAt(0).toUpperCase() + day.slice(1)}</h1>

                <div className="day-selector">
                    <label>Choose Day:</label>
                    <select value={day} onChange={(e) => setDay(e.target.value)}>
                        <option value="push">Push (Chest, Shoulders, Triceps)</option>
                        <option value="pull">Pull (Back, Biceps)</option>
                        <option value="legs">Legs (Quads, Hamstrings, Glutes)</option>
                    </select>
                </div>

                <div className="exercise-grid">
                    {workoutPlan[day].map((exercise, index) => (
                        <div key={index} className="exercise-row">
                            <label>
                                Exercise:
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
                                <label>
                                    Sets Performed:
                                    <input type="number" onChange={(e) => handleLogChange(exercise.name, 'sets', e.target.value)} />
                                </label>
                                <label>
                                    Reps Performed:
                                    <input type="number" onChange={(e) => handleLogChange(exercise.name, 'reps', e.target.value)} />
                                </label>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="btn-save" onClick={saveLog}>Log Workout</button>
            </div>
        </div>
    );
}

export default PPLProgram;
