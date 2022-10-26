import React from 'react'
import  ReactDOM  from 'react-dom'
import "./index.scss"
import App from './App'
import {DarkModeContext} from './context/darkModeContext'
function Page() {

  const[darkMode,setDarkMode] = React.useState(false)
  return (
    
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
    <App />
    </DarkModeContext.Provider>   
    
  )
}

ReactDOM.render(<Page />, document.getElementById('root'))