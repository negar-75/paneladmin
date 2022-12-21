import React from 'react'
import  ReactDOM  from 'react-dom'
import "./index.scss"
import App from './App'
import store from './store'
import { Provider } from 'react-redux';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
import { ThemeProvider } from '@mui/material';
import {theme} from './style/customMuiStyle'




function Page() {

  
 
  //  store.subscribe(() => console.log(store.getState()))
  

  return (
    
    <ThemeProvider theme={theme}>
    <Provider store={store}>
    <App />
    </Provider>
    </ThemeProvider>
    
    
  )
}

ReactDOM.render(<Page />, document.getElementById('root'))