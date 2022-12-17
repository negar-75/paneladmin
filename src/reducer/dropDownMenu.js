import {DROP_DOWN}from '../actions/type';


const initialState = {
    open:false,
    dropdowmMenuName : null
}


const dropDownReducer = (state = initialState ,action) =>{
    switch(action.type){
        case DROP_DOWN :
            return{
                ...state,
                dropdowmMenuName: action.payload,
                open:state.dropdowmMenuName === action.payload ? !state.open : true
            }
        default:
            return state    
    }
}

export default dropDownReducer