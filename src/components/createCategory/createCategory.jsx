import React from 'react';
import {TextField, Box }from '@mui/material';
import './createCategory.scss';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import ChangePhoto from '../changePhoto/changePhoto';
import {createCategory} from '../../services/user.service';
import{textFieldStyle}  from '../../style/customMuiStyle';
import {createCategoryInput} from '../../formsource';
import {failedMessage,clearMessage} from '../../actions/message';
import store from '../../store';
import { useSelector } from 'react-redux';
import ReactLoading from 'react-loading';



 

function CreateCategory({setSuccess}) {

  const [categoryName,setCategoryName] = React.useState ();
  const [url,setUrl] =React.useState();
  const inputRef = React.useRef();
  const message = useSelector(state => state.message.message)
  const[loading,setLoading] = React.useState(false);
  
  
  
  const submitHandler = async() =>{
    setLoading(true)
    try{
      
      if( categoryName && url ){
        store.dispatch(clearMessage());
        const res = await createCategory(categoryName,url);
        setSuccess (true)
        setLoading(false)

        
      }else{
        store.dispatch(failedMessage('Please fill required fields'))
        setLoading(false)
      }
      
    }
    catch(err){
      console.log(err)
      setSuccess(false)
    }
    
     
  }


  React.useEffect(()=>{
    inputRef.current.focus();

  },[])
 
   
 return (
    <div className='create-category'>
      <div className="title">Create new category</div>
      <div className="body">
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <FastfoodOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          {createCategoryInput.map((item) => {
            return(
              <div className="input">
              <TextField 
               id={item.id}
               name = {item.name}
               label = {item.lable}
               variant ={item.variant}
               onChange={(e)=>{setCategoryName(e.target.value)}}
               sx={textFieldStyle}
               inputRef={inputRef}
               />
               <span>{message}</span>
               </div>
            )
          })}
         
        </Box>
        <ChangePhoto 
        title = 'Upload your image' 
        showImage = {false}
        setUrl = {setUrl}
        
        />
      </div>
      
     { loading ? <div className="loading"><ReactLoading type='spinningBubbles' color='green' height={20} width={20} /></div> :
      <div className='submit'><button onClick={submitHandler}>Submit</button></div>}
      
      
      
      
    </div>
    
  )

}
export default CreateCategory