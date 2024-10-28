import React, { useState } from 'react';
import './FullBodyProgram.css';

const workoutPlan = {
    dayA: [
        { name: 'Barbell Bench Press', alternatives: ['Dumbbell Bench Press', 'Chest Press Machine'], sets: 4, reps: '8-12' },
        { name: 'Barbell Squats', alternatives: ['Leg Press', 'Hack Squat'], sets: 4, reps: '8-12' },
        { name: 'Pull-ups', alternatives: ['Lat Pulldown', 'Pull-up Machine'], sets: 4, reps: '8-12' },
        { name: 'Overhead Press', alternatives: ['Dumbbell Shoulder Press', 'Machine Shoulder Press'], sets: 3, reps: '10-12' },
        { name: 'Barbell Curls', alternatives: ['Dumbbell Curls', 'Preacher Curls'], sets: 3, reps: '10-12' }
    ],
    dayB: [
        { name: 'Incline Bench Press', alternatives: ['Incline Dumbbell Press', 'Incline Chest Press Machine'], sets: 4, reps: '8-12' },
        { name: 'Deadlift', alternatives: ['Romanian Deadlift', 'Rack Pulls'], sets: 4, reps: '8-12' },
        { name: 'Barbell Rows', alternatives: ['Dumbbell Rows', 'Seated Rows'], sets: 4, reps: '8-12' },
        { name: 'Lateral Raises', alternatives: ['Cable Lateral Raises', 'Dumbbell Lateral Raises'], sets: 3, reps: '10-15' },
        { name: 'Tricep Dips', alternatives: ['Skull Crushers', 'Tricep Pushdowns'], sets: 3, reps: '10-12' }
    ],
    dayC: [
        { name: 'Chest Dips', alternatives: ['Machine Chest Press', 'Push-Ups'], sets: 4, reps: '8-12' },
        { name: 'Leg Curls', alternatives: ['Romanian Deadlift', 'Hamstring Curls'], sets: 4, reps: '8-12' },
        { name: 'Chin-Ups', alternatives: ['Lat Pulldown', 'Pull-up Machine'], sets: 4, reps: '8-12' },
        { name: 'Rear Delt Flyes', alternatives: ['Reverse Pec Deck', 'Cable Rear Delt Flyes'], sets: 3, reps: '10-15' },
        { name: 'Hammer Curls', alternatives: ['Concentration Curls', 'Cable Curls'], sets: 3, reps: '10-12' }
    ]
};

function FullBodyProgram() {
    const [day, setDay] = useState('dayA');
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
        <div className="full-body-page-container">
            <div className="workout-tips">
                <h3>Workout Tips</h3>
                <ul>
                    <li>Focus on controlled, full-range movements.</li>
                    <li>Rest 60-90 seconds between sets.</li>
                    <li>Progressive overload is key for muscle growth.</li>
                    <li>Always warm up before lifting heavy weights.</li>
                    <li>Stay hydrated and maintain good nutrition.</li>
                </ul>
            </div>

            <div className="ppl-program-content">
                <h1 className="program-title" style={{ color: 'white' }}> Full Body Program - Day: {day === 'dayA' ? 'A' : day === 'dayB' ? 'B' : 'C'}</h1>

            <div className="day-selector">
                <label>Choose Day:</label>
                <select value={day} onChange={(e) => setDay(e.target.value)}>
                    <option value="dayA">Day A</option>
                    <option value="dayB">Day B</option>
                    <option value="dayC">Day C</option>
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

                <button onClick={saveLog} className="btn-save">Log Workout</button>
            </div>
        </div>
    );
}

export default FullBodyProgram;
