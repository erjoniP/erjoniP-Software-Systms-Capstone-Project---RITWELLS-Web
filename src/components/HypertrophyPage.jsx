import React from 'react';
import './HypertrophyPage.css';
import { Link } from 'react-router-dom';

function HypertrophyPage() {
    return (
        <div style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            width: '100%',
            maxWidth: '1200px' 
        }}>
            <h1>Hypertrophy Workout Programs</h1>
            <div className="program-grid">
                <div className="program-tile">
                    <h3>Bro Split</h3>
                    <p>Focus on individual muscle groups with this 5-day routine.</p>
                    <Link to="/bro-split">
                        <button className="btn-primary">View Program</button>
                    </Link>
                </div>
                <div className="program-tile">
                    <h3>Push/Pull/Legs</h3>
                    <p>A balanced 3-day routine targeting upper body push, pull, and leg workouts.</p>
                    <Link to="/ppl">
                        <button className="btn-primary">View Program</button>
                    </Link>
                </div>
                <div className="program-tile">
                    <h3>Upper/Lower Split</h3>
                    <p>Work your upper body one day and your lower body the next with this 4-day split.</p>
                    <Link to="/upperlower-program">
                        <button className="btn-primary">View Program</button>
                    </Link>
                </div>
                <div className="program-tile">
                    <h3>Full Body Split</h3>
                    <p>Hit every muscle group in a single session with this 3-day full body split.</p>
                    <Link to="/fullbody-program">
                        <button className="btn-primary">View Program</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HypertrophyPage;