import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About the Project</h1>
        <p className="tagline">Empowering industries with intelligent maintenance foresight</p>
      </div>

      <div className="about-section">
        <div className="about-text">
          <h2>🔍 What is Predictive Maintenance?</h2>
          <p>
            Predictive Maintenance (PdM) uses advanced <strong>Machine Learning</strong> algorithms and historical equipment data to foresee potential failures and anomalies. This enables organizations to prevent unexpected breakdowns, increase machinery lifespan, and optimize operational efficiency.
          </p>
        </div>
        <div className="about-image">
          <img src="/predictive_img.jpeg" alt="Predictive Maintenance Overview" />
        </div>
      </div>

      <div className="about-section reverse">
        <div className="about-text">
          <h2>⚙️ How It Works</h2>
          <p>
            Our intelligent engine processes <strong>real-time sensor inputs</strong> and correlates them with historical failure patterns to produce high-accuracy maintenance predictions. It is capable of:
          </p>
          <ul>
            <li>📊 Real-time equipment health monitoring using ML models</li>
            <li>📉 Forecasting Remaining Useful Life (RUL) of components</li>
            <li>🔔 Generating dynamic alerts and custom maintenance schedules</li>
            <li>🧠 Learning and improving predictions over time</li>
          </ul>
        </div>
        <div className="about-image">
          <img src="/predictive_maintenanceimg2.webp" alt="Machine Learning in Maintenance" />
        </div>
      </div>

      <div className="about-section">
        <div className="about-text">
          <h2>🌟 Unique Features</h2>
          <ul>
            <li>🔐 AI-driven Anomaly Detection using hybrid ML techniques</li>
            <li>📈 Intuitive dashboards with real-time insights and visualizations</li>
            <li>📤 Seamless CSV data upload with live data transformation</li>
            <li>⚙️ Plug-and-play integration with IoT and PLC systems</li>
            <li>🧩 Modular microservices for scalable architecture</li>
            <li>🌐 Cloud-ready deployment for edge or centralized monitoring</li>
            <li>🗂️ Equipment-wise breakdown history tracking and maintenance logs</li>
          </ul>
        </div>
         <div className="about-image">
    <img src="/predictive-maintenance_img3.webp" alt="Unique Features" />
  </div>
      </div>

      <div className="about-footer">
        <h2>🚀 The Impact</h2>
        <p>
          This project redefines traditional maintenance models. By moving from a reactive to a predictive approach, industries can achieve:
        </p>
        <ul>
          <li>✅ 70% reduction in unplanned downtime</li>
          <li>✅ 30% cost savings in maintenance operations</li>
          <li>✅ Increased asset reliability and lifespan</li>
          <li>✅ Smarter decisions with data-backed foresight</li>
        </ul>
        <a href="/predict" className="learn-more-btn">🚀 Try It Yourself</a>
      </div>
    </div>
  );
};

export default About;
