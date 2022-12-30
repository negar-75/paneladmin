import React from 'react'
import Home from './pages/home/Home';
import Staffs from './pages/staffs/staffs';
import Login from './pages/login/Login';
import User from './pages/addPages/user';
import Single from './pages/single/Single';
import EditProfile from './pages/editProfile/editProfile';
import MenuCatalogue from './pages/menuCatalogue/menuCatalogue';
import Items from './pages/productList/items/items';
import Sauces from './pages/productList/sauces/sauces';
import {userInputs, } from './sources/formsource';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useSelector } from 'react-redux';




import "./style/darkStyle.scss"



function App() {

  
  const darkMode = useSelector(state => state.darkMode.darkMode)
 
  return (

    <div className={`app ${ darkMode ? "dark": ""}`}>
    <BrowserRouter>
        <Routes>
      <Route path='/' >
        <Route index element={<Home />}/>
        <Route path='login' element={<Login />} />
        {/* <Route path='menue' element={<Menue />} /> */}
        <Route path='staffs'>
          <Route index element={<Staffs />}/> 
          <Route path=':staffId'>
            <Route index element={<Single/>} />
            <Route path='editprofile' element={<EditProfile/>} />
          </Route>
          <Route path='new' element={<User  input={userInputs}  title='Add New User'/>} />
        </Route>
        <Route path='menuCatalogue' element={<MenuCatalogue />} />
        <Route path='productList'>
           
           <Route path='items' >
             <Route index element={<Items />} />
             <Route path='add' element />
             <Route path=':id/edit' element />
           </Route>
           <Route path='sauces' >
             <Route index element={<Sauces />} />
             <Route path='add' />
             <Route path=':id/edit' element />

           </Route>
        </Route>
          
        
      </Route>
        </Routes> 
    </BrowserRouter>
    </div>
  )
}

export default App