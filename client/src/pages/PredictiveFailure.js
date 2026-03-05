// PredictFailure.js (React)
import React, { useState } from "react";
import "./PredictiveFailure.css";

const PredictFailure = () => {
  const [inputData, setInputData] = useState({
    type: "", // no default, user must choose
    airTemp: "",
    processTemp: "",
    rpm: "",
    torque: "",
    toolWear: "",
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handlePredict = async () => {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("http://localhost:5000/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputData),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ error: "Prediction request failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="predict-container">
      <div className="predict-box">
        <h1>🔮 Predict Machine Failure</h1>
        <p className="subtitle">Enter telemetry values and check failure risk.</p>

        {/* Product Type Dropdown */}
        <div className="input-row">
          <label>Product Type:</label>
          <select name="type" value={inputData.type} onChange={handleChange}>
            <option value="">Enter your choice</option>
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="H">H</option>
          </select>
        </div>

        <div className="input-grid">
          <div className="input-row">
            <label>Air Temperature (K):</label>
            <input
              type="number"
              name="airTemp"
              value={inputData.airTemp}
              onChange={handleChange}
              placeholder="Enter value of Air Temperature in K"
            />
          </div>

          <div className="input-row">
            <label>Process Temperature (K):</label>
            <input
              type="number"
              name="processTemp"
              value={inputData.processTemp}
              onChange={handleChange}
              placeholder="Enter value of Process Temperature in K"
            />
          </div>

          <div className="input-row">
            <label>Rotational Speed (rpm):</label>
            <input
              type="number"
              name="rpm"
              value={inputData.rpm}
              onChange={handleChange}
              placeholder="Enter value of Rotational speed in rpm"
            />
          </div>

          <div className="input-row">
            <label>Torque (Nm):</label>
            <input
              type="number"
              name="torque"
              value={inputData.torque}
              onChange={handleChange}
              placeholder="Enter value of Torque in Nm"
            />
          </div>

          <div className="input-row">
            <label>Tool Wear (min):</label>
            <input
              type="number"
              name="toolWear"
              value={inputData.toolWear}
              onChange={handleChange}
              placeholder="Enter value of Tool Wear in minutes"
            />
          </div>
        </div>

        <button className="predict-btn" onClick={handlePredict} disabled={loading}>
          {loading ? "Predicting..." : "Predict Now"}
        </button>

        {result && result.error && <div className="result error">{result.error}</div>}

        {result && !result.error && (
          <div className={`result ${result.prediction === "Failure" ? "failure" : "safe"}`}>
            <h3>{result.prediction}</h3>
            <p>Probability of failure: {(result.probability * 100).toFixed(1)}%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PredictFailure;
