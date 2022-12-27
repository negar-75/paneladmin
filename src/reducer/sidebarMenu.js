import {OPEN_SIDEBAR, CLOSE_SIDEBAR} from '../actions/type';


const initialState = {
    isSidebarMenuOpen:false
}

const sidebarMenuHandle = (state=initialState, action) =>{
    switch (action.type){
        case OPEN_SIDEBAR :
            return{
                ...state,
                isSidebarMenuOpen:true
            }
        case CLOSE_SIDEBAR :
            return initialState;

        default:
            return state;   
    } 
}

export default sidebarMenuHandle