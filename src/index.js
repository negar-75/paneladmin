import React from 'react'
import  ReactDOM  from 'react-dom'
import "./index.scss"
import App from './App'
import store from './store'
import { Provider } from 'react-redux';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';



function Page() {

  
 
  //  store.subscribe(() => console.log(store.getState()))
  

  return (
    
    
    <Provider store={store}>
    <App />
    </Provider>
    
    
  )
}

ReactDOM.render(<Page />, document.getElementById('root'))