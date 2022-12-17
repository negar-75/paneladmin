import React from 'react';
import TextField from '@mui/material/TextField';
import "./login.scss";
import store from '../../store';
import {login} from "../../actions/auth";
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/fontawesome-free-solid';
import { useNavigate } from "react-router-dom";
import {textFieldStyle} from '../../style/customMuiStyle';
import {loginInputs} from  '../../formsource';





function Login() {
   
  const[person,setPerson] = React.useState({
    username:'',
    password:''
  })

  const [isActive,setIsActive] = React.useState(false)
  const message = useSelector (state => state.message.message)
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  let navigate = useNavigate();
 
  const inputhandler = (e) =>{
   
    setPerson(() => {
      return{
        ...person,
        [e.target.name] : e.target.value
      }
    })
  }


 

 if (isLoggedIn) {
  setTimeout(() => {
    navigate("/");
  }, 2000);
 }

 React.useEffect(() =>{
  if (isLoggedIn) return setIsActive(true)
 },[isLoggedIn])
 
 
 

 
 


  
  return (
  <div className='login'>
      <div className="loginContainer">
        <h2><span className='first-section'>fast</span><span className='second-section'>Foo</span></h2>
        <div className="loginForm">
          <div className="title">Login</div>
          {loginInputs.map((item) => {
            return(
              <TextField 
               id={item.id}
               name = {item.name}
               label = {item.lable}
               variant ={item.variant}
               onChange={inputhandler}
               sx={textFieldStyle}
               />
            )
          })}
          {message && <span className='message'>{message}</span>}
          <div className= 'wrapper '  >
            <button className={`submit ${ isActive ? "active": " "}` } type='button' onClick={() =>store.dispatch(login(person))}>
            <span>Submit</span>
            <div className="success">
            <FontAwesomeIcon icon={faCheck} className='icon' />
            </div>
            </button>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img className='hero-img' src={require('../../assets/images/pizza.jpg')}/>
      </div>
     
      
  </div>
  )
}

export default Login