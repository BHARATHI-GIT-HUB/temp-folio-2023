import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

import { Chart, registerables } from "chart.js";

import "./App.css";

Chart.register(...registerables);

export default function App() {
  const Data = [
    {
      id: 1,
      year: 2016,
      userGain: "Jan",
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: "Feb",
      userLost: 823,
    },
    {
      id: 3,
      year: 2018,
      userGain: "Mar",
      userLost: 2000,
    },
    {
      id: 3,
      year: 2018,
      userGain: "Apr",
      userLost: 2000,
    },
    {
      id: 4,
      year: 2018,
      userGain: "May",
      userLost: 2000,
    },
    {
      id: 5,
      year: 2018,
      userGain: "Jun",
      userLost: 2000,
    },
    {
      id: 6,
      year: 2018,
      userGain: "Jul",
      userLost: 2000,
    },
    {
      id: 7,
      year: 2018,
      userGain: "Aug",
      userLost: 2000,
    },
    {
      id: 8,
      year: 2018,
      userGain: "Sep",
      userLost: 2000,
    },
    {
      id: 9,
      year: 2018,
      userGain: "Oct",
      userLost: 2000,
    },
    {
      id: 10,
      year: 3000,
      userGain: "Nov",
      userLost: 1000,
    },
    {
      id: 11,
      year: 2018,
      userGain: "Dec",
      userLost: 2000,
    },
    {
      id: 12,
      year: 2018,
      userGain: "Mar",
      userLost: 2000,
    },
  ];

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.userGain),
    datasets: [
      {
        label: "My First Dataset",
        data: [600, 250, 580, 100, 300, 400, 70, 40, 90, 300, 200, 100, 120],
        backgroundColor: ["rgba(91, 87, 199, 0.87)"],
        borderRadius: 19,
        borderSkipped: false,
        barThickness: 80,
      },
    ],
  });

  const chartOptions = {
    scales: {
      drawOnChartArea: false,
      x: {
        display: false,
      },
      y: {
        display: false,

        min: 0,
        max: 800,
        ticks: {
          stepSize: 50,
          display: false,
        },
      },
    },
  };

  return (
    <div className="App">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}
