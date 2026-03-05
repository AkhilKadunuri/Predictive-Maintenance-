import React from "react";
import KNNBarChart from "./KNNBarChart";
import GaussianNBBarChart from "./Gaussian";
import LogisticRegressionBarChart from "./Logistic";
import SVMBarChart from "./SVM";
import DecisionTreeBarChart from "./decision";
import RandomForestBarChart from "./Random";
import AdaBoostBarChart from "./AdaBoost";
import GradientBoostingBarChart from "./GradientBoost";
import "./modelalgorithm.css";

const ModelAlgorithms = () => {
  const charts = [
    { Component: KNNBarChart, title: "KNN" },
    { Component: GaussianNBBarChart, title: "Gaussian NB" },
    { Component: LogisticRegressionBarChart, title: "Logistic Regression" },
    { Component: SVMBarChart, title: "SVM" },
    { Component: DecisionTreeBarChart, title: "Decision Tree" },
    { Component: RandomForestBarChart, title: "Random Forest" },
    { Component: AdaBoostBarChart, title: "AdaBoost" },
    { Component: GradientBoostingBarChart, title: "Gradient Boost" },
  ];

  return (
    <div className="model-container">
      <h1 className="model-title">
        Machine Learning Algorithms - Overall Metrics
      </h1>

      <div className="chart-grid">
        {charts.map(({ Component, title }, idx) => (
          <div key={idx} className="chart-card">
            <h2 className="chart-title">{title}</h2>
            <div className="chart-wrapper">
              <Component />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelAlgorithms;
