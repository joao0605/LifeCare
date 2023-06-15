import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);




function Grafico(props) {
  const xValues = ["Calls", "Sales"];
  const yValues = props.values;
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
      text: "Chart"
    }
  };

  return (
    <div style={{width: "100%", height: "100%"}}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default Grafico;
