import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './ServicesPage.css';
import service1Image from '../assets/woman-doing-workout-gym-with-trainer.jpg'; 
import service2Image from '../assets/woman-helping-man-gym.jpg';
import service3Image from '../assets/real-food-pyramid-assortment-top-view.jpg';
import service4Image from '../assets/weights-1024x576.jpeg';

function ServicesPage() {
    return (
        <div style={{
            position: 'absolute',
            marginTop: '50px',
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
            <div className="services-container">
                <h1 className="services-title">Our Services</h1>
                <div className="services-grid">
                    {/* Service 1: Personal Training */}
                    <Link to="/personal-training" className="service-card">
                        <img src={service1Image} alt="Service 1" className="service-image" />
                        <div className="service-content">
                            <h2>Personal Training</h2>
                            <p>Get personalized training plans with expert guidance tailored to your fitness goals.</p>
                        </div>
                    </Link>


                    {/* Service 2: Group Workouts */}
                    <Link to="/PPL" className="service-card">
                        <img src={service2Image} alt="Service 2" className="service-image" />
                        <div className="service-content">
                            <h2>Group Workouts</h2>
                            <p>Join our dynamic group workout sessions, designed to be fun and effective for all fitness levels.</p>
                        </div>
                    </Link>

                    {/* Service 3: Nutrition Coaching */}
                    <div className="service-card">
                        <img src={service3Image} alt="Service 3" className="service-image" />
                        <div className="service-content">
                            <h2>Nutrition Coaching</h2>
                            <p>Receive personalized meal plans and nutrition advice to complement your fitness routine.</p>
                        </div>
                    </div>
                    {/* Service 4: Programs */}
                    <Link to="/programs-page" className="service-card">
                        <img src={service4Image} alt="Service 4" className="service-image" />
                        <div className="service-content">
                            <h2>Programs</h2>
                            <p>Discover various fitness programs like Hypertrophy, Weight Loss, and Movement Snack.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ServicesPage;