import { configureStore } from '@reduxjs/toolkit';
import reducerAuth from './reducer/auth';
import darkModeReducer from './reducer/darkmode';
import dropDownReducer from './reducer/dropDownMenu';
import mobileSidebarMenuHandle from './reducer/mobileSidebarMenu';


const store = configureStore({
    reducer: {
      user:reducerAuth,
      darkMode: darkModeReducer,
      dropDown:dropDownReducer,
      isMobileSidebarMenuOpen:mobileSidebarMenuHandle
      }
  })
  
  export default store