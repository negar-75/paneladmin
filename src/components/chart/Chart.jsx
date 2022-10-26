import React from 'react'
import "./chart.scss"
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function Chart(props) {
  const data = [
    {
      name:"January",
      Total:1200,
      Target:1800
      
    },
    {
      name:"Febuary",
      Total:1000,
      Target:1100
    },
    {
      name:"March",
      Total:1450,
      Target:1400
    },
    {
      name:"April",
      Total:2000,
      Target:1700
    },
    {
      name:"June",
      Total:1700,
      Target:1900
    },
  ];
  
  
  
  return (
    <div className='chart'>
      <div className="title">{props.title}</div>
      <ResponsiveContainer width="100%" aspect={props.aspect}>
     <AreaChart  data={data}
  margin={{ top:25, right:25, left: 20, bottom: 20 }}
  >
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    
  </defs>
  <XAxis dataKey="name"  stroke='gray'/>
  
  <CartesianGrid strokeDasharray="3 3"className='chartGrid'/>
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#7584d8" fillOpacity={1} fill="url(#total)" />
</AreaChart>
</ResponsiveContainer>
    </div>
  )
}

export default Chart