import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import './Barchart.css'

// ✅ Register all required chart types and plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Barchart = () => {
  const data = {
    labels: ["Group A", "Group B", "Group C"],
    datasets: [
      {
        label: "Group 1",
        data: [24, 5, 1],
        backgroundColor: "#ADD8E6", // Light blue
      },
      {
        label: "Group 2",
        data: [20, 9, 1],
        backgroundColor: "#0000FF", // Blue
      },
      {
        label: "Group 3",
        data: [18, 7, 5],
        backgroundColor: "#00008B", // Dark blue
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Monthly statistics",
        font: {
          size: 20, // Optional: Title font size
        },
        color: "#ffffff", // Optional: Title text color
      },
      legend: {
        position: "top",
        labels: {
          font: {
            size: 18, // 👈 Legend font size
          },
          color: "#ffffff", // 👈 Legend text color (dark blue)
        },
      },
    },
    scales: {
      x: {
        stacked: false,
        title: {
          display: true,
          text: "Groups",
          font: {
            size: 18,
          },
          color: "#fff",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Values",
          font: {
            size: 16,
          },
          color: "#ffffff",
        },
      },
    },
  };
  

  return (
    <div  className="mybar">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Barchart;
