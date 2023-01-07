import React from 'react'
import  ReactDOM  from 'react-dom'
import "./index.scss"
import AppDesktop from './AppDesktop';
import AppMobile from './AppMobile';
import store from './store'
import { Provider } from 'react-redux';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
import { ThemeProvider } from '@mui/material';
import {theme} from './style/customMuiStyle';
import { useMediaQuery } from "react-responsive";




function Page() {

  
 
  //  store.subscribe(() => console.log(store.getState()))
  
    const isDesktopOrLaptop = useMediaQuery({
      query: "(min-width: 600px)",
    });
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });
 

  return (
    
    <ThemeProvider theme={theme}>
    <Provider store={store}>
    {isDesktopOrLaptop && <AppDesktop />}
    {isTabletOrMobile && <AppMobile />}

    </Provider>
    </ThemeProvider>
    
    
  )
}

ReactDOM.render(<Page />, document.getElementById('root'))