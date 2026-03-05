import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GradientBoostingBarChart = () => {
  const labels = ["Accuracy", "Precision", "Recall", "F1-Score"];
  const data = {
    labels,
    datasets: [
      {
        label: "Gradient Boosting",
        data: [0.94, 0.95, 0.94, 0.94],
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384", "#4BC0C0"],
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      title: { display: true, text: "Gradient Boosting Overall Metrics", font: { size: 20 } },
      legend: { display: false },
    },
    scales: { y: { beginAtZero: true, max: 1, ticks: { stepSize: 0.1 } } },
  };
  return <Bar data={data} options={options} />;
};

export default GradientBoostingBarChart;
