import React, { useState, useEffect } from 'react'
import { Bar } from '@reactchartjs/react-chart.js'
import {useStore} from "../store/state"


const options = {
  
    scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

function VerticalBar(){ 
  const [date] = useState(new Date())
  const [week, setWeek] = useState([0,0,0,0,0,0,0])
  const {water , setWater} = useStore()
  let temp = [0,0,0,0,0,0,0];
  useEffect(() => {
    temp[parseInt(date.getDay())] = water;
    setWeek(temp)
    console.log(week)
  }, [water])
  
  const data = {
    labels: ['sat', 'sun', 'mon', 'tues', 'wed', 'thurs', 'fri'],
    datasets: [
      {
        label: 'ML of Water',
        data: week,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(150, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(150, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  return(
  <>
    <div className=" w-80 mx-auto bg-gray-200 rounded-lg">
    <Bar data={data} options={options} />
    </div>
  </>
)}

export default VerticalBar