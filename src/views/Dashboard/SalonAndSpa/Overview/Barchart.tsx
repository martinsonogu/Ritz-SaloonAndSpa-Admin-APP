import React, { PureComponent } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, LinearScale, CategoryScale, Tooltip, Legend, Title } from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const barChartData = {
  labels: ["Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday", "Sunday"],
  datasets: [
    {
      label: "Daily revenue",
      data: [1200, 300, 150, 180, 100, 250, 5000],
      backgroundColor: ["rgba(255 99 132, 0.2"],
      borderColor: ["rgba(96, 14, 133, 1"],
      borderWidth: 1,
    },
  ],
}

const BarChart = () => {
  const options = {}
  
      return (
        <div className="w-full">
            <Bar options={options} data={barChartData} />
        </div>
    );
}
export default BarChart