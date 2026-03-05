import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';

import Home from './pages/home';
import AboutProject from './pages/AboutProject';
import DatasetOverview from './pages/DatasetOverview';
import PredictiveFailure from './pages/PredictiveFailure';
import ModelAlgorithms from './pages/PerformanceMetrics';
import PerformanceMetrics from './pages/ModelAlgorithms';

import Feedback from './pages/feedback.js';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutProject />} />
          <Route path="/dataset" element={<DatasetOverview />} />
          <Route path="/predict" element={<PredictiveFailure />} />
          <Route path="/algorithms" element={<ModelAlgorithms />} />
          <Route path="/metrics" element={<PerformanceMetrics />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
