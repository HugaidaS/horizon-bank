'use client'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip)

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    labels: ['Bank 1', 'Bank 2', 'Bank 3'],
    datasets: [
      {
        label: 'Banks',
        data: [1250, 3000, 4124],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
        borderWidth: 0
      }
    ]
  }

  return (
    <>
      <Doughnut
        data={data}
        options={{
          cutout: '60%'
        }}
      />
    </>
  )
}
export default DoughnutChart
