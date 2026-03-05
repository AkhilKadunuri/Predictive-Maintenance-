import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdaBoostBarChart = () => {
  const labels = ["Accuracy", "Precision", "Recall", "F1-Score"];
  const data = {
    labels,
    datasets: [
      {
        label: "AdaBoost",
        data: [0.74, 0.80, 0.74, 0.73],
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384", "#4BC0C0"],
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      title: { display: true, text: "AdaBoost Overall Metrics", font: { size: 20 } },
      legend: { display: false },
    },
    scales: { y: { beginAtZero: true, max: 1, ticks: { stepSize: 0.1 } } },
  };
  return <Bar data={data} options={options} />;
};

export default AdaBoostBarChart;
