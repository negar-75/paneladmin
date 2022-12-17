import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    GET_USER
  } from "../actions/type";

  const initialState = {
    profileName: null,
    isLoggedIn: false,
    loginError: null,
    isAuth:false
    
    
}

 const reducerAuth = (state = initialState,action) =>{

    switch(action.type){
        case LOGIN_SUCCESS :
            return {
                ...state,
                profileName:action.payload,
                isLoggedIn: true,
                loginError: false,
                isAuth:true
                
            }  
            
          case LOGIN_FAIL :
            return {
                ...state,
                loginError:true,
                
            }  

            case LOGOUT :
                return initialState
            case GET_USER :  
            return{
                ...state,
                profileName:action.payload,
                isLoggedIn:true,
                loginError:false,
                isAuth:true
                
            }  

            default:
                 return state
        }

        
    }
export default reducerAuth 