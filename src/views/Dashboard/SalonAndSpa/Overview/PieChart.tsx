import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

const pieChartData = {
  labels: ["Male", "Female"],
  datasets: [
    {
      label: "Gender",
      data: [1200, 5000],
      backgroundColor: ["rgba(67, 57, 242, 1)", "rgba(255, 178, 0, 1"],
      hoverOffset: 4,
    },
  ],
}

const PieChart = () => {
  const options = {}
  
      return (
        <div className="w-full">
            <Pie options={options} data={pieChartData} />
        </div>
    );
}
export default PieChart