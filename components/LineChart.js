import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineChart = (props) => {
  const {
    climateText,
    ydayText,
    coordinates,
    climateVariable,
    startDate,
    endDate,
  } = props;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Line Chart",
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Day of Year",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: climateVariable,
        },
      },
    },
  };

  const labels = ydayText;

  const data = {
    labels,
    datasets: [
      // {
      //   label: "Dataset 1",
      //   data: [1, 2, 3],
      //   borderColor: "rgb(255, 99, 132)",
      //   backgroundColor: "rgba(255, 99, 132, 0.5)",
      // },
      {
        label: climateVariable,
        data: climateText,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  console.log("props", { props });
  return (
    <div>
      <Line options={options} data={data} height={400} width={600} />
    </div>
  );
};
