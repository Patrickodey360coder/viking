import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function Bars({chartData}) {
  return (
    <Doughnut
    data={chartData}
    />
  )
}

export default Bars
