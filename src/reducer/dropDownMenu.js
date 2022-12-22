import {DROP_DOWN}from '../actions/type';


const initialState = {
    open:false,
    menuItemName : null
}


const dropDownReducer = (state = initialState ,action) =>{
    switch(action.type){
        case DROP_DOWN :
            return{
                ...state,
                menuItemName: action.payload,
                open:state.menuItemName === action.payload ? !state.open : true
            }
        default:
            return state    
    }
}

export default dropDownReducer