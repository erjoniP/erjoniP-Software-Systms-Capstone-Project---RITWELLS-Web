import React, { useState } from 'react';
import { auth, firestore } from './firebaseConfig';
import { doc, setDoc, updateDoc, arrayUnion, collection, addDoc} from 'firebase/firestore';
import './UpperLowerProgram.css';

const workoutPlan = {
    upper: [
        { name: 'Barbell Bench Press', alternatives: ['Dumbbell Bench Press', 'Chest Press Machine'], sets: 4, reps: '8-12' },
        { name: 'Barbell Rows', alternatives: ['Dumbbell Rows', 'Seated Rows'], sets: 4, reps: '8-12' },
        { name: 'Overhead Press', alternatives: ['Dumbbell Shoulder Press', 'Machine Shoulder Press'], sets: 4, reps: '8-12' },
        { name: 'Barbell Curls', alternatives: ['Dumbbell Curls', 'Preacher Curls'], sets: 3, reps: '10-15' },
        { name: 'Tricep Dips', alternatives: ['Skull Crushers', 'Tricep Pushdowns'], sets: 3, reps: '10-15' }
    ],
    lower: [
        { name: 'Squats', alternatives: ['Leg Press', 'Hack Squat'], sets: 4, reps: '8-12' },
        { name: 'Romanian Deadlift', alternatives: ['Hamstring Curls', 'Good Mornings'], sets: 4, reps: '8-12' },
        { name: 'Lunges', alternatives: ['Step Ups', 'Leg Extensions'], sets: 3, reps: '10-15' },
        { name: 'Leg Curls', alternatives: ['Romanian Deadlift', 'Hamstring Curls'], sets: 3, reps: '10-15' },
        { name: 'Calf Raises', alternatives: ['Seated Calf Raise', 'Smith Machine Calf Raise'], sets: 4, reps: '15-20' }
    ]
};

function UpperLowerProgram() {
    const [day, setDay] = useState('upper');
    const [logs, setLogs] = useState({});

    const handleLogChange = (exerciseName, type, value) => {
        setLogs(prev => ({
            ...prev,
            [exerciseName]: { ...prev[exerciseName], [type]: value }
        }));
    };

    const saveLog = async () => {
        const user = auth.currentUser;

        if (!user) {
            alert('You must be logged in to log workouts.');
            return;
        }
        const userWorkoutCollectionRef = collection(firestore, 'users', user.uid, 'workouts');
            try {
            
            await addDoc(userWorkoutCollectionRef, {
                date: new Date().toISOString(),
                day: day,
                exercises: logs,
            });

            alert('Workout logged successfully!');
            console.log('Workout saved:', logs);
        } catch (error) {
            console.error('Error saving workout:', error);
            alert('Failed to log workout. Please try again.');
        }
    };

    return (
        <div className="full-body-page-container">
            <div className="workout-tips">
                <h3>Workout Tips</h3>
                <ul>
                    <li>Focus on progressive overload for muscle growth.</li>
                    <li>Take 60-90 seconds of rest between sets.</li>
                    <li>Make sure to use full range of motion for every exercise, pausing for 1 sec at the stretch position</li>
                    <li>Control the eccentric(lowering) phase of the exercise</li>
                    <li>Maintain proper form to avoid injuries.</li>
                </ul>
            </div>

            <div className="ppl-program-content">
                <h1 className="program-title">Upper/Lower Split Program - Day: {day === 'upper' ? 'Upper Body' : 'Lower Body'}</h1>
            <div className="day-selector">
                <label>Choose Day:</label>
                <select value={day} onChange={(e) => setDay(e.target.value)}>
                    <option value="upper">Upper Body (Chest, Back, Shoulders, Arms)</option>
                    <option value="lower">Lower Body (Quads, Hamstrings, Glutes, Calves)</option>
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

export default UpperLowerProgram;