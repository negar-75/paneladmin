import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import ChangeProfile from '../../components/changeprofile/changeProfile';






function New(props) {
  
  

  
  
  return (
    <div className='new'>
      <Sidebar />
    <div className="newContainer">
        <Navbar />
        <div className="top">{props.title}</div>
        <div className="bottom">
         <div className="left">
          <ChangeProfile /> 
         </div>
          <div className="right">
            <form>

              {props.input.map(item =>{
                return(
                  <div className="formElement" key={item.id}>
                  <label >{item.label}</label>
                  <input type={item.type} placeholder={item.placeholder} 
                  />
                </div>
                )
              })}
              
            <button>Send</button>
            
            </form>
          </div>
        </div>
      </div>
     
    </div>
    
    
  )
}

export default New