import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: 'Number of Sales',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
    
  }],
}

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Number of sales'
    },
  }
}

function DoughNut() {
  return (
    <div style={{width: "350px", margin: "0 auto"}}>
      <Doughnut data={data} options={options} />
    </div>
  )
}

export default DoughNut
