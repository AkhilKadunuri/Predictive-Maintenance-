import React from "react";
import "./DatasetOverview.css";

// Add your actual image paths here
import productNumberImg from "./productnumber.jpg";  // update path & filename
import productTypeImg from "./producttype.webp";      // update path & filename

import tempImg from "./tempature.jpg";
import processtempImg from "./processtemp.webp";
import speedImg from "./speed.jpg";
import torqueImg from "./torque.gif";
import wearImg from "./toolwear.jpg";
import failureImg from "./machinefailure.webp";

const DatasetOverview = () => {
  return (
    <div className="dataset-overview-container">
      <div className="dataset-header">
        <h1>Dataset Overview</h1>
        <p>
          This dataset contains real-time telemetry and failure records from
          industrial machines. It is used for <strong>predictive maintenance</strong>,
          detecting potential breakdowns before they occur.
        </p>
      </div>

      <div className="dataset-grid">

        {/* Product Number */}
        <div className="dataset-card">
          <img src={productNumberImg} alt="Product Number" />
          <h3>Product Number</h3>
          <p>
            Unique identifier assigned to each product in the dataset.
            Helps track individual machine records and performance.
          </p>
        </div>

        {/* Product Type */}
        <div className="dataset-card">
          <img src={productTypeImg} alt="Product Type" />
          <h3>Product Type</h3>
          <p>
            Specifies the type or category of the product or machine.
            Useful for segmenting data based on machine variants or models.
          </p>
        </div>

        <div className="dataset-card">
          <img src={tempImg} alt="Temperature" />
          <h3>Air Temperature [K]</h3>
          <p>
            Measures the surrounding environment's temperature.  
            Useful for analyzing the effect of ambient conditions on machine performance.
          </p>
        </div>

        <div className="dataset-card">
          <img src={processtempImg} alt="Process Temp" />
          <h3>Process Temperature [K]</h3>
          <p>
            Internal temperature inside the machine during operation.  
            Higher readings may indicate overheating or coolant failure.
          </p>
        </div>

        <div className="dataset-card">
          <img src={speedImg} alt="Rotational Speed" />
          <h3>Rotational Speed [rpm]</h3>
          <p>
            The rate at which machine components spin.  
            Helps detect imbalances, misalignments, or abnormal wear.
          </p>
        </div>

        <div className="dataset-card">
          <img src={torqueImg} alt="Torque" />
          <h3>Torque [Nm]</h3>
          <p>
            Rotational force applied during operation.  
            Abnormal torque may indicate excessive load or component stress.
          </p>
        </div>

        <div className="dataset-card">
          <img src={wearImg} alt="Tool Wear" />
          <h3>Tool Wear [min]</h3>
          <p>
            Tracks how long a tool has been in use.  
            High values correlate with reduced cutting efficiency.
          </p>
        </div>

        <div className="dataset-card">
          <img src={failureImg} alt="Failure Type" />
          <h3>Failure Type</h3>
          <p>
            Classification of machine failures such as <strong>heat dissipation failure</strong>,  
            <strong>power failure</strong>, <strong>tool wear failure</strong>, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DatasetOverview;
