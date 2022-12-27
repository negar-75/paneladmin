import { configureStore } from '@reduxjs/toolkit';
import reducerAuth from './reducer/auth';
import darkModeReducer from './reducer/darkmode';
import messReducer from './reducer/message';
import dropDownReducer from './reducer/dropDownMenu';
import loadingReducer from './reducer/loading';
import sidebarMenuHandle from './reducer/sidebarMenu';


const store = configureStore({
    reducer: {
      user:reducerAuth,
      darkMode: darkModeReducer,
      message:messReducer,
      dropDown:dropDownReducer,
      loading:loadingReducer,
      isSidebarMenuOpen:sidebarMenuHandle
      }
  })
  
  export default store