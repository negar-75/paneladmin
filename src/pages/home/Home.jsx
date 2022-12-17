import React from 'react'
import Featured from '../../components/featured/featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/widget'
import Chart from '../../components/chart/chart'
import Table from '../../components/table/table'
import "./home.scss"
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import store from '../../store';
import {getUser} from '../../actions/auth'




function Home() {
 
  const isAuth = useSelector(state => state.user.isAuth)
  if(!isAuth && !localStorage.getItem('token') ) return <Navigate to= '/login' />

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


