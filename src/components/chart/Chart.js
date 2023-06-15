import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);




const ChartComponent = () => {
  const xValues = ["Calls", "Sales"];
  const yValues = [15, 3];
  const barColors = ["yellow", "green"];

  const chartData = {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues
      }
    ]
  };

  const chartOptions = {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Gráfico"
    }
  };

  return (
    <div>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default ChartComponent;
