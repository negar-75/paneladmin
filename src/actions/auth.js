import authService from "../services/authService";

import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    GET_USER,
    SUCCESS_MESSAGE
  } from "./type";


export const login = (userObj) => dispatch => {
    console.log(userObj,"userObj")
    authService.login(userObj)
    .then((response) =>{
    console.log(response)
    localStorage.setItem('token',response.data.access_token)
    localStorage.setItem('username',userObj.username)
    dispatch(
      {
        type:LOGIN_SUCCESS,
        payload:userObj.username
      }
    )
})
.catch((error) => {
  
  console.log(error)
  dispatch(
    {
      type:LOGIN_FAIL,
    }
  )
  dispatch(
    {
      type:SUCCESS_MESSAGE,
      payload:'Username or password is incorrect. All passwords at least must be 12 characters.'
    }
  )

})
}

export const logout = () => (dispatch) => {
    authService.logout();
  
    dispatch({
      type: LOGOUT,
    });
  };
export const getUser = () =>  async dispatch =>{
    try{
     const res = await authService.getUser();
     dispatch({
      type:GET_USER,
      payload: res.data
     })
    //  console.log('get user ok')
    }
    catch(error){
      console.log(error)
        dispatch({
            type: LOGOUT,
          });
      localStorage.removeItem('token')    
      console.log('get user failed')
    }
}
