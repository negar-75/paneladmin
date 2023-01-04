import { configureStore } from '@reduxjs/toolkit';
import reducerAuth from './reducer/auth';
import darkModeReducer from './reducer/darkmode';
import dropDownReducer from './reducer/dropDownMenu';
import sidebarMenuHandle from './reducer/sidebarMenu';


const store = configureStore({
    reducer: {
      user:reducerAuth,
      darkMode: darkModeReducer,
      dropDown:dropDownReducer,
      isSidebarMenuOpen:sidebarMenuHandle
      }
  })
  
  export default store