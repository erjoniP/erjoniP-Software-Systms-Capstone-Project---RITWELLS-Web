import React, { useState } from 'react';
import "./WeightLossProgram.css"


const workoutPlan = {
    day1: [
        { name: 'Squats', alternatives: ['Goblet Squats', 'Bodyweight Squats'], sets: 4, reps: '12-15' },
        { name: 'Burpees', alternatives: ['Jumping Jacks', 'Mountain Climbers'], sets: 4, reps: '30 seconds' },
        { name: 'Push-ups', alternatives: ['Incline Push-ups', 'Knee Push-ups'], sets: 3, reps: '15-20' },
        { name: 'Sprints', alternatives: ['Cycling', 'Rowing'], sets: 4, reps: '30 seconds' }
    ],
    day2: [
        { name: 'Lunges', alternatives: ['Step-ups', 'Bulgarian Split Squats'], sets: 4, reps: '12-15' },
        { name: 'Jump Squats', alternatives: ['Jumping Jacks', 'Mountain Climbers'], sets: 4, reps: '30 seconds' },
        { name: 'Deadlifts', alternatives: ['Romanian Deadlift', 'Kettlebell Deadlift'], sets: 4, reps: '8-12' },
        { name: 'Cycling', alternatives: ['Running', 'Rowing'], sets: 4, reps: '30 seconds' }
    ],
    day3: [
        { name: 'Pull-ups', alternatives: ['Lat Pulldown', 'Chin-ups'], sets: 4, reps: '8-12' },
        { name: 'Push Press', alternatives: ['Dumbbell Shoulder Press', 'Overhead Press'], sets: 4, reps: '8-12' },
        { name: 'Burpees', alternatives: ['Jumping Jacks', 'Mountain Climbers'], sets: 4, reps: '30 seconds' },
        { name: 'Sprints', alternatives: ['Cycling', 'Rowing'], sets: 4, reps: '30 seconds' }
    ],
    day4: [
        { name: 'Active Recovery', alternatives: ['Walking', 'Light Cycling'], sets: 4, reps: '30-45 minutes' },
        { name: 'Stretching', alternatives: ['Yoga', 'Dynamic Stretches'], sets: 4, reps: '10-15 minutes' }
    ],
    day5: [
        { name: 'Squats', alternatives: ['Goblet Squats', 'Bodyweight Squats'], sets: 4, reps: '12-15' },
        { name: 'Burpees', alternatives: ['Jumping Jacks', 'Mountain Climbers'], sets: 4, reps: '30 seconds' },
        { name: 'Push-ups', alternatives: ['Incline Push-ups', 'Knee Push-ups'], sets: 3, reps: '15-20' },
        { name: 'Sprints', alternatives: ['Cycling', 'Rowing'], sets: 4, reps: '30 seconds' }
    ]
};

function WeightLossPage() {
    const [day, setDay] = useState('day1');
    const [logs, setLogs] = useState({});

    const handleLogChange = (exerciseName, type, value) => {
        setLogs(prev => ({
            ...prev,
            [exerciseName]: { ...prev[exerciseName], [type]: value }
        }));
    };

    const saveLog = () => {
        localStorage('weightLossProgramLogs', JSON.stringify(logs));
        alert("Workout looged successfully!")
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
            <h1 style={{ color: '#fff' }}>Weight Loss Program - Day: {day.replace('day', '')}</h1>

            
            <div className="day-selector">
                <label style={{ color: '#fff' }}>Choose Day:</label>
                <select value={day} onChange={(e) => setDay(e.target.value)} style={{ padding: '10px', marginLeft: '10px' }}>
                    <option value="day1">Day 1 (Full Body + Cardio)</option>
                    <option value="day2">Day 2 (Lower Body + Cardio)</option>
                    <option value="day3">Day 3 (Upper Body + Cardio)</option>
                    <option value="day4">Day 4 (Active Recovery)</option>
                    <option value="day5">Day 5 (Full Body + Cardio)</option>
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

export default WeightLossPage;