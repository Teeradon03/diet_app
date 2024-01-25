import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart({ chartData }) {
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
          font: { size: 14 },
        },
      },
      tooltips: {
        callbacks: {
          label: (tooltipItem, data) => {
            const dataset = data.datasets[tooltipItem.datasetIndex];
            const total = dataset.data.reduce((previousValue, currentValue) => previousValue + currentValue);
            const currentValue = dataset.data[tooltipItem.index];
            const percentage = ((currentValue / total) * 100).toFixed(2);
            return `${dataset.label}: ${percentage}%`;
          },
        },
      },
    },
  };

  return <Pie data={chartData} options={options} />;
}

export default PieChart;
