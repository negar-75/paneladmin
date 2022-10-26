import React from 'react'
import Home from './pages/home/Home'
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
import {userInputs, productInputs } from './formsource'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {DarkModeContext} from './context/darkModeContext'



import "./style/style.scss"
function App() {

  const {darkMode} = React.useContext(DarkModeContext)
  return (

    <div className={`app ${ darkMode ? "dark": ""}`}>
    <BrowserRouter>
        <Routes>
      <Route path='/' >
        <Route index element={<Home />}/>
        <Route path='login' element={<Login />} />
        <Route path='users'>
          <Route index element={<List />}/> 
          <Route path=':userId' element={<Single/>} />
          <Route path='new' element={<New  input={userInputs}  title='Add New User'/>} />
        </Route>
        <Route path='products'>
          <Route index element={<List />}/> 
          <Route path=':productId' element={<Single/>} />
          <Route path='new' element={<New input={productInputs} title = 'Add New Product' />} />
        </Route>
      </Route>
        </Routes> 
    </BrowserRouter>
    </div>
  )
}

export default App