import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
  const chartData = {
    labels: ['Users', 'Fragrances', 'Sold', 'In Stock'],
    datasets: [
      {
        data: data,
        backgroundColor: ['#FF5733', '#C87FD0', '#DB6E38', '#64E694'],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PieChart;
