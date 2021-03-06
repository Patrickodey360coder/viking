import React from 'react'
import 'chart.js/auto';
import { Line } from 'react-chartjs-2'

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
    borderWidth: 1,
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
  ],
  }]
}

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart - Logarithmic'
    }
  },
  scales: {
    x: {
      display: true,
    },
    y: {
      display: true,
      type: 'logarithmic',
    }
  }
}

function LineChart() {
  return (
    <div style={{width: "800px", margin: "0 auto"}}>
      <Line data={data} options={options} />
    </div>
  )
}

export default LineChart
