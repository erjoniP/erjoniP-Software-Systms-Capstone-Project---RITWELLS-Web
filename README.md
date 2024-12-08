## Ritwells Website
# Overview
The Ritwells website is a comprehensive health and fitness platform designed to promote preventive health and holistic well-being. It provides users with personalized workout plans, progress tracking, and an interactive chatbot for fitness and nutrition guidance. The project incorporates modern web development practices and cutting-edge technologies to create a responsive and user-friendly experience.

# Features
User Authentication: Secure login and registration using Firebase Authentication.
Profile Management: Users can update personal information and track their workout history.
Workout Logging: Log workouts dynamically with program-specific details such as exercises, sets, and reps.
Workout Dashboard: View logged workouts in a clean, grid-based layout with details about program type and date.
Interactive Chatbot: Get guidance on fitness programs and nutrition.
Responsive Design: Optimized for desktop, tablet, and mobile devices.
Modern UI/UX: Consistent branding with sleek designs and smooth transitions.

# Installation and Setup
Prerequisites
- Node.js: Ensure you have Node.js installed.
- Download Node.js
- Firebase Account: Set up a Firebase project for authentication and Firestore database.
# Steps
Clone the repository:
- git clone https://github.com/erjoniP/erjoniP-Software-Systms-Capstone-Project---RITWELLS-Web.git
cd ritwells-website
# Install dependencies:
- npm install
# Configure Firebase:
- Replace placeholders in firebaseConfig.js with your Firebase project credentials.
# Start the development server:
- npm start
- Access the website at http://localhost:3000.
# For Chatbot
- Install Flowise from their repository: https://github.com/FlowiseAI/Flowise.git
- In terminal run: npx flowise start
- Access Flowise at http://localhost:3000







# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
