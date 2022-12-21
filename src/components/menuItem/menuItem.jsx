import React from 'react';
import './menuItem.scss';
import {deleteCategory,updateCategory} from '../../services/user.service';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {handleDelet,firstLetterToUpperCase,useDidMountEffect} from '../../services/functions';
import { useTheme } from '@mui/material/styles';


function MenuItem(props) {
  const {image,
    title, 
    id,
    items,
    setItems,
    status
    } = props;
  const[toggleMode,setToggleMode] = React.useState({
    'status': status
  })
  const[elementId,setElementId] = React.useState();
  const theme = useTheme();
   
  
 
 
     
 

  
  const fetch = async() =>{
    console.log('second function')
    const res = await updateCategory(elementId,toggleMode)
    console.log(res)
    
  }
  

  useDidMountEffect(fetch,toggleMode) //not to run useEffect in first render

   
  
  
 

 const toggleChange = (e) =>{
  
  setElementId(e.target.id)
  setToggleMode((pre) => ({...pre,'status':e.target.checked}))
 }
  
 
  

  return (
    <div className='menu-item'>
        <div className="card-img">
            <img src={image}  />
        </div>
        <div className="card-body">
          <div className="body-title">
            <h6>{firstLetterToUpperCase(title)}</h6>
            <FormControlLabel
              
              
              control={
              <Switch 
              color='success' 
              size="medium"
              id={id} 
              value={toggleMode.status}
              checked={toggleMode.status}
              onChange={toggleChange}
              sx={theme.toggleStyle.switch}
              />}
              label={toggleMode.status ? 'Enable' : 'Disable'} 
              labelPlacement="bottom"
              sx={theme.toggleStyle.lable}
              
            />
          </div>
          <button className='delet-category' onClick={() => handleDelet(id,deleteCategory,setItems,items)}> Delet category</button> 
          <button className='edit-category'> Edit category</button> 
        </div>
    </div>
  )
}

export default MenuItem