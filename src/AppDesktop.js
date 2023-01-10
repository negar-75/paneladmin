import React from 'react'
import HomeDesktop from './pages/home/homeDesktop';
import StaffsTableDesktop from './pages/staff/staffsTable/staffsTableDesktop';
import  LoginDesktop from './pages/login/loginDesktop';
import AddStaffDesktop from './pages/addPages/addStaff/addStaffDesktop';
import SingleStaffDesktop from './pages/staff/singleStaff/singleStaffDesktop'
import EditStaff from './pages/staff/editStaff/editStaff';
import MenuCatalogueDesktop from './pages/menuCatalogue/menuCatalogueDesktop';
import ItemsDesktop from './pages/productList/items/itemsDesktop';
import AddItem from './pages/addPages/addItem/addItem';
import StationsDesktop from './pages/productList/stations/stationsDesktop';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useSelector } from 'react-redux';
import PrivateRoutes from './routes/privateRoutes';




import "./style/darkStyle.scss"



function AppDesktop() {

  
  const darkMode = useSelector(state => state.darkMode.darkMode)
 
  return (

    <div className={`app ${ darkMode ? "dark": ""}`}>
    <BrowserRouter>
        <Routes>
        
        <Route path='/' >

        <Route path='login' element={< LoginDesktop />} />
        
        <Route element={<PrivateRoutes />}>

          <Route  element={<HomeDesktop />}  path='/' exact/>

          <Route path='staffs'>
        
            <Route index element={<StaffsTableDesktop />}/> 
      
            <Route path=':staffId'>
      
             <Route index element={<SingleStaffDesktop/>} />
      
             <Route path='editprofile' element={<EditStaff/>} />
      
           </Route>
       
           <Route path='addUser' element={<AddStaffDesktop />} />
      
         </Route>
      
         <Route path='menuCatalogue' element={<MenuCatalogueDesktop />} />
      
         <Route path='productList'>
       
         <Route path='items' >
       
           <Route index element={<ItemsDesktop />} />
       
           <Route path='add' element={<AddItem />} />
       
           <Route path=':id/edit' element />
       
         </Route>
       
         <Route path='stations' >
       
           <Route index element={<StationsDesktop />} />
       
         </Route>

        </Route>

      </Route>

    </Route>

</Routes> 

</BrowserRouter>

    </div>
  )
}

export default AppDesktop