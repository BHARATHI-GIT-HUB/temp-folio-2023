import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const counter = {
  id: "counter",
  beforeInit: function (chart, plugins) {
    console.log(chart);

    // Get reference to the original fit function
    // const originalFit = chart.legend.fit;
    // // Override the fit function
    // chart.legend.fit = function fit() {
    //   // Call original function and bind scope in order to use `this` correctly inside it
    //   originalFit.bind(chart.legend)();
    //   this.height += 35;
  },
};

ChartJS.register(counter);

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //   const sliceThickness ={
  // id: 'sliceThickness'
  // beforeDraw(chart, plugins) {
  // console. log (chart. chartArea.width); console.
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const option = {
  plugins: {
    display: function (context) {
      var dataset = context.dataset;
      var count = dataset.data.length;
      var value = dataset.data[context.dataIndex];
      return value > count * 1.5;
    },
  },
};
function App() {
  return (
    <div>
      <Doughnut data={data} options={option} />
    </div>
  );
}

export default App;
