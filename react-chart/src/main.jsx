import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { Doughnut } from "react-chartjs-2";
import Doughnut from "./DoughNut.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Doughnut />
  </React.StrictMode>
);
