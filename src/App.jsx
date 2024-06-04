import React, { useEffect, useRef } from "react";
import "./App.css";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Title,

Filler} from "chart.js";
import { Bar,Line} from "react-chartjs-2";


//bar chart
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend,
  PointElement, LineElement, Title, Filler
);
export const options ={
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
}
const labels=["January", "February", "March", "April", "May", "June", "July"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Dataset 2",
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: "rgb(54, 162, 235)",
    },
  ],
};


//line chart
const linedata={
  labels: labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: "rgb(255, 99, 132)",
    },
  ],

}

function App() {


  return (
    <>
      <Bar data={data} options={options} height={20} width={60}/>
     <Line data={linedata} options={options} height={20} width={60}/>
    </>
  );
}

export default App;
