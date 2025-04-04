import React from "react";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

 ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
);

 const getRandomNumber = () => Math.floor(Math.random() * 200) - 100;

const generateData = (count) => Array.from({ length: count }, getRandomNumber);

 const colorize = (value, hover) => {
  const v = value;
  const c =
    v < -50 ? "#D60000" : v < 0 ? "#F46300" : v < 50 ? "#0358B6" : "#44DE28";

  const opacity = hover ? 1 - Math.abs(v / 150) - 0.2 : 1 - Math.abs(v / 150);
  const alpha = Math.max(0.1, Math.min(1, opacity));
  return `${c}${Math.round(alpha * 255)
    .toString(16)
    .padStart(2, "0")}`;
};

 const getLineColor = (index) => {
  const colors = ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"];
  return colors[index % colors.length];
};

const Dashboard = () => {
  const PIE_DATA_COUNT = 5;
  const LINE_DATA_COUNT = 12;

   const pieDataValues = generateData(PIE_DATA_COUNT);
  const pieData = {
    labels: ["One", "Two", "Three", "Four", "Five"],
    datasets: [
      {
        data: pieDataValues,
        backgroundColor: pieDataValues.map((v) => colorize(v, false)),
        hoverBackgroundColor: pieDataValues.map((v) => colorize(v, true)),
      },
    ],
  };

  const lineValues = generateData(LINE_DATA_COUNT);
  const lineData = {
    labels: Array.from({ length: LINE_DATA_COUNT }, (_, i) => `Month ${i + 1}`),
    datasets: [
      {
        label: "Sample Line Data",
        data: lineValues,
        borderColor: getLineColor(0),
        backgroundColor: getLineColor(0),
        pointStyle: "circle",
        pointRadius: 5,
        pointHoverRadius: 8,
      },
    ],
  };

  return (
    <div style={{  display: "flex", alignItems:"center", justifyContent:"end", marginLeft:"10rem"}}>
       <div style={{ width: "400px", height:"300px", margin: "0 auto"}}>
        <Pie data={pieData} />
       </div>

       <div style={{ width: "400px", height:"300px", margin: "50px auto"}}>
        <Line data={lineData} />
      </div>
    </div>
  );
};

export default Dashboard;
