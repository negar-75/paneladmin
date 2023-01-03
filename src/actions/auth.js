import authService from "../services/authService";


import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    GET_USER,
    SUCCESS_MESSAGE,
    FAILED_MESSAGE,
    SET_LOADING,
    CLEAR_LOADING
  } from "./type";


export const login = (userObj) => dispatch => {
    dispatch({
      type:SET_LOADING,
      payload:'login'
    })
    authService.login(userObj)
    .then((response) =>{
    
    localStorage.setItem('token',response.data.access_token)
    localStorage.setItem('username',userObj.username)
    dispatch(
      {
        type:LOGIN_SUCCESS,
        payload:userObj.username
      }
    )
    dispatch({
      type:CLEAR_LOADING
    })

})
.catch((error) => {
  console.log(error)
  dispatch({
    type:LOGIN_FAIL
  })
  dispatch({
    type:CLEAR_LOADING
  })
  if(error?.response?.status === 400 ) {
    console.log('error 400')
     dispatch(
      {
        type:FAILED_MESSAGE,
        payload:'Username or password is incorrect. All passwords at least must be 12 characters.'
      }
    )
  }else {
    
     dispatch(
      {
        type:FAILED_MESSAGE,
        payload:'Something went wrong, please try again '
      }
    )
  }
  

})
}

export const logout = () => (dispatch) => {
    authService.logout();
    dispatch({
      type: LOGOUT,
    });
    // <Navigate to="/login" />

  };
export const getUser = () =>  async dispatch =>{
    try{
     const res = await authService.getUser();
     dispatch({
      type:GET_USER,
      payload: res.data
     })
    
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
