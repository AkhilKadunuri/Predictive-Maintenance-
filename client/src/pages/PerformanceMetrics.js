import React from "react";
import "./Performancemetric.css";

// Import images
import knnImg from "./knn.png";
import nbImg from "./gradient nb.png";
import logisticImg from "./logistic.png";
import dtImg from "./decisiontree.png";
import rfImg from "./randomforest.png";
import adaImg from "./adaboostml.png";
import gbImg from "./gradientboostml.png";
import xgbImg from "./xgboost.png";
import svmImg from "./svmml.jpg";

const ModelAlgorithms = () => {
  return (
    <div className="model-algorithms-container">
      <header className="model-header">
        <h1>⚙️ Model Algorithms</h1>
        <p>
          The following machine learning algorithms are used for predictive maintenance and failure detection.
        </p>
      </header>

      <div className="algorithms-grid">
        <div className="algorithm-card">
          <img src={knnImg} alt="K-Nearest Neighbors" />
          <h3>K-Nearest Neighbors (KNN)</h3>
          <p>
            Classifies data points based on the majority class among their nearest neighbors in the feature space.
          </p>
        </div>

        <div className="algorithm-card">
          <img src={nbImg} alt="Gaussian Naive Bayes" />
          <h3>Gaussian Naive Bayes</h3>
          <p>
            A probabilistic classifier based on applying Bayes' theorem with strong independence assumptions.
          </p>
        </div>

        <div className="algorithm-card">
          <img src={logisticImg} alt="Logistic Regression" />
          <h3>Logistic Regression</h3>
          <p>
            A linear model for binary classification that estimates the probability of a class using the logistic function.
          </p>
        </div>

        <div className="algorithm-card">
          <img src={dtImg} alt="Decision Tree" />
          <h3>Decision Tree</h3>
          <p>
            A model that splits data based on feature thresholds to create a tree structure of decisions.
          </p>
        </div>

        <div className="algorithm-card">
          <img src={rfImg} alt="Random Forest" />
          <h3>Random Forest</h3>
          <p>
            An ensemble method combining multiple decision trees to improve accuracy and reduce overfitting.
          </p>
        </div>

        <div className="algorithm-card">
          <img src={adaImg} alt="AdaBoost" />
          <h3>AdaBoost</h3>
          <p>
            An ensemble boosting technique that combines weak classifiers sequentially, focusing on difficult cases.
          </p>
        </div>

        <div className="algorithm-card">
          <img src={gbImg} alt="Gradient Boost" />
          <h3>Gradient Boost</h3>
          <p>
            Sequentially builds models to correct errors of previous models, optimizing predictive performance.
          </p>
        </div>

        <div className="algorithm-card">
          <img src={xgbImg} alt="XGBoost" />
          <h3>XGBoost</h3>
          <p>
            An optimized and scalable implementation of gradient boosting that is widely used for structured data.
          </p>
        </div>

        <div className="algorithm-card">
          <img src={svmImg} alt="Support Vector Machine" />
          <h3>Support Vector Machine (SVM)</h3>
          <p>
            Finds the optimal hyperplane that separates classes with maximum margin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModelAlgorithms;
