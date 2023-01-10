import React from 'react'
import StaffsTableMobile from './pages/staff/staffsTable/staffsTableMobile';
import LoginDesktop from './pages/login/loginDesktop';
import EditStaff from './pages/staff/editStaff/editStaff';
import MenuCatalogueMobile from './pages/menuCatalogue/menuCatalogueMobile';
import ItemsMobile from './pages/productList/items/itemsMobile';
import AddItemMobile from './pages/addPages/addItem/addItemMobile';
import StationsMobile from './pages/productList/stations/stationsMobile';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useSelector } from 'react-redux';
import PrivateRoutes from './routes/privateRoutes';
import "./style/darkStyle.scss"
import SingleStaffMobile from './pages/staff/singleStaff/singleStaffMobile';
import HomeMobile from './pages/home/homeMobile';
import AddStaffMobile from './pages/addPages/addStaff/addStaffMobile';



function AppMobile() {

  
  const darkMode = useSelector(state => state.darkMode.darkMode)
 
  return (

    <div className={`app ${ darkMode ? "dark": ""}`}>
    <BrowserRouter>
        <Routes>
        
        <Route path='/' >

        <Route path='login' element={< LoginDesktop />} />
        
        <Route element={<PrivateRoutes />}>

          <Route  element={<HomeMobile />}  path='/' exact/>

          <Route path='staffs'>
        
            <Route index element={<StaffsTableMobile />}/> 
      
            <Route path=':staffId'>
      
             <Route index element={<SingleStaffMobile/>} />
      
             <Route path='editprofile' element={<EditStaff/>} />
      
           </Route>
       
           <Route path='addUser' element={<AddStaffMobile />} />
      
         </Route>
      
         <Route path='menuCatalogue' element={<MenuCatalogueMobile />} />
      
         <Route path='productList'>
       
         <Route path='items' >
       
           <Route index element={<ItemsMobile />} />
       
           <Route path='add' element={<AddItemMobile />} />
       
           <Route path=':id/edit' element />
       
         </Route>
       
         <Route path='stations' >
       
           <Route index element={<StationsMobile />} />
       
         </Route>

        </Route>

      </Route>

    </Route>

</Routes> 

</BrowserRouter>

    </div>
  )
}

export default AppMobile