import {SET_LOADING,CLEAR_LOADING} from '../actions/type';

const initialState ={
    loading:false
}


  const loadingReducer = (state = initialState, action) =>{
    switch (action.type){
        case SET_LOADING :
            return{
                ...state,
                loading:true
            }
        case CLEAR_LOADING:{
            return {
                ...state,
                loading:false
            }
        } 
        default:
            return state  
    }
}

export default loadingReducer