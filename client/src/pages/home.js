import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-fullscreen">
      <div className="home-overlay">
        <h1 className="home-welcome">Welcome to</h1>
        <h1 className="home-title">Predictive Maintenance System</h1>
        <p className="home-subtitle">
          Empowering industries with intelligent failure prediction using machine learning.
        </p>
        <a href="/predict" className="home-button">Get Started</a>
      </div>
    </div>
  );
};

export default Home;
