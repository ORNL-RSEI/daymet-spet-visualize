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
  const { daymetData, climateVariable } = props;

  const dataset = daymetData === null ? null : daymetData.data[climateVariable];

  const labels =
    daymetData === null ? [1, 2, 3, 4, 5, 6] : daymetData.data["yday"];

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

  const data = {
    labels,
    datasets: [
      {
        label: climateVariable,
        data: dataset,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div id="chart">
      <Line options={options} data={data} />
    </div>
  );
};
