import {
    DARK,
    LIGHT,
    TOGGLE
}from '../actions/type'

const initialState = {
    darkMode:false
}

const darkModeReducer = (state = initialState ,action ) => {
    switch (action.type){
        case DARK :
            return{
                ...state,
                darkMode:true
            }
        case LIGHT:
            return{
                ...state,
                darkMode:false
            }
        case TOGGLE :
            return{
                ...state,
                darkMode: !state.darkMode
            } 
        default:
            return state           
    }
}

export default darkModeReducer

