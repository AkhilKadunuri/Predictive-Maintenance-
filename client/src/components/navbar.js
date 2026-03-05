import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';  // optional for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Predictive Maintenance</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Project</Link></li>
        <li><Link to="/dataset">Dataset Overview</Link></li>
        <li><Link to="/predict">Predict Failure</Link></li>
         <li><Link to="/algorithms">Model Algorithms</Link></li>
        <li><Link to="/metrics">Performance Metrics</Link></li>
      
      </ul>
    </nav>
  );
};

export default Navbar;
