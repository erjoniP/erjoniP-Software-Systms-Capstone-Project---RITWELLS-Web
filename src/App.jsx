import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import AboutPage from './components/AboutPage.jsx';
import ServicesPage from './components/ServicesPage.jsx';
import HypertrophyPage from './components/HypertrophyPage.jsx';
import WeightLossPage from './components/WeightLossPage.jsx';
import MovementSnackPage from './components/MovementSnackPage.jsx';
import BroSplit from './components/BroSplit.jsx';
import PPLProgram from './components/PPL.jsx';
import UpperLowerProgram from './components/UpperLowerProgram.jsx';
import FullBodyProgram from './components/FullBodyProgram.jsx';
import PersonalTraining from './components/PersonalTraining.jsx';
import ProgramsPage from './components/ProgramsPage';
import './App.css';


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/hypertrophy" element={<HypertrophyPage />} />
                    <Route path="/bro-split" element={<BroSplit />} />
                    <Route path="/ppl" element={<PPLProgram />} />
                    <Route path="/upperlower-program" element={<UpperLowerProgram />} />
                    <Route path="/fullbody-program" element={<FullBodyProgram />} />
                    <Route path="/weight-loss" element={<WeightLossPage />} />
                    <Route path="/movement-snack" element={<MovementSnackPage />} />
                    <Route path="/personal-training" element={<PersonalTraining />} />
                    <Route path="/programs-page" element={<ProgramsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;