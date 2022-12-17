import React from 'react'
import './staffs.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/datatable'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import store from '../../store';
import {getUser} from '../../actions/auth';





function Staffs() {


  

 store.dispatch(getUser());
 const isAuth = useSelector(state => state.user.isAuth);
  if(!isAuth && !localStorage.getItem('token') ) return <Navigate to= '/login' />

  
  

  


  return (
   
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
    
    
  )
}

export default Staffs