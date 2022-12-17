import React from 'react'
import { useParams } from 'react-router-dom';
import Input from '@mui/material/Input'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './editProfile.scss';
import { useLocation ,Navigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux'
import {getUser} from '../../actions/auth'
import store from '../../store';
import {updateUser} from '../../services/user.service'

function EditProfile() {
  
   let {staffId} = useParams();
   const viewUser= useLocation().state
   store.dispatch(getUser());
   const isAuth = useSelector(state => state.user.isAuth)
  if(!isAuth && !localStorage.getItem('token') ) return <Navigate to= '/login' />

   
    
    let editedUser ={};

    const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData(e.target)
      console.log(Object.fromEntries(data.entries()))
      console.log(staffId)
      updateUser(staffId, Object.fromEntries(data.entries()))
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      }



      



  return (
    <div className='editProfile'>
       <Sidebar />
       <div className='editProfileContainer'>
        <Navbar />
         <div className="formContainer">
         
        <form onSubmit={handleSubmit}>
        <div className="title">Update Profile</div>
        <div className="inputs">
        <Input
          name="username"
          type="text"
          value={editedUser?.username}
          placeholder={viewUser.username}
          
        />
        
        <Input
          name="email"
          type="email"
          value={editedUser?.email}
          placeholder={viewUser.email}
          
        />
        <Input
          name="phone"
          type="text"
          value={editedUser?.phone}
          placeholder={viewUser.phone}
          
        />
        <Input
          name="password"
          type="password"
          value={editedUser?.password}
          placeholder={"Your new password"}
          
        />
        </div>
        
        <input type="submit" value="Update" className='submit' />
      </form>
      </div>
        </div>
       
    </div>
  )
}

export default EditProfile