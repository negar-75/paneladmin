import React from 'react'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'
import "./home.scss"

function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget
          type="user"
          increase = {false} />
          <Widget
          type="order" 
          increase = {true}/>
          <Widget 
          type="earning"
          increase = {false}/>
          <Widget 
          type="balance"
          increase = {true}/>
        </div>
        <div className="charts">
          <Featured />
          <Chart 
           aspect= { 2 / 1}
           title = "last 6 month (Revenue)"/>
        </div>
        <div className="listContainer">
          <h1 className="title">Last Transaction</h1>
           <Table />
        </div>
      </div>
    </div>
  )
}

export default Home 