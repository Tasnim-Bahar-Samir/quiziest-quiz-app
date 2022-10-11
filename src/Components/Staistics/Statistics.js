
import React from 'react';
import { useLoaderData } from 'react-router-dom'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import './Statistics.css'

const Statistics = () => {
    const data = useLoaderData().data;
    console.log(data)
    const chartStyle= {
        padding:'10px',
        textAlign:'center'
    }
  return (
    <div style={chartStyle}>
        <h2 style={{marginBottom:'20px'}}>Chart Of Total Quiz</h2>
        <ResponsiveContainer width='100%' height = {400}> 
        <LineChart
         margin={{ top: 20, right: 30, left: 0, bottom: 0 ,}}
         data = {data}
        >
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
           
        </LineChart>
        </ResponsiveContainer>
   </div> 
  )
}

export default Statistics