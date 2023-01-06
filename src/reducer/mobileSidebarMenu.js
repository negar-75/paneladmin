import {OPEN_SIDEBAR, CLOSE_SIDEBAR} from '../actions/type';


const initialState = {
    isMobileSidebarMenuOpen:false
}

const mobileSidebarMenuHandle = (state=initialState, action) =>{
    switch (action.type){
        case OPEN_SIDEBAR :
            return{
                ...state,
                isMobileSidebarMenuOpen:true
            }
        case CLOSE_SIDEBAR :
            return initialState;

        default:
            return state;   
    } 
}

export default mobileSidebarMenuHandle