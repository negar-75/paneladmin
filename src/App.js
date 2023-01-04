import React from 'react'
import Home from './pages/home/Home';
import StaffsTable from './pages/staff/staffsTable/staffsTable';
import Login from './pages/login/Login';
import AddUser from './pages/addPages/addUser';
import SingleStaff from './pages/staff/singleStaff/singleStaff'
import EditStaff from './pages/staff/editStaff/editStaff';
import MenuCatalogue from './pages/menuCatalogue/menuCatalogue';
import Items from './pages/productList/items/items';
import Stations from './pages/productList/stations/stations';
import {StaffInputs } from './sources/staffSources/staffAddForm';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useSelector } from 'react-redux';
import PrivateRoutes from './routes/privateRoutes';




import "./style/darkStyle.scss"



function App() {

  
  const darkMode = useSelector(state => state.darkMode.darkMode)
 
  return (

    <div className={`app ${ darkMode ? "dark": ""}`}>
    <BrowserRouter>
        <Routes>
        
        <Route path='/' >

        <Route path='login' element={<Login />} />
        
        <Route element={<PrivateRoutes />}>

          <Route  element={<Home />}  path='/' exact/>

          <Route path='staffs'>
        
            <Route index element={<StaffsTable />}/> 
      
            <Route path=':staffId'>
      
             <Route index element={<SingleStaff/>} />
      
             <Route path='editprofile' element={<EditStaff/>} />
      
           </Route>
       
           <Route path='addUser' element={<AddUser  input={StaffInputs}  title='Add New User'/>} />
      
         </Route>
      
         <Route path='menuCatalogue' element={<MenuCatalogue />} />
      
         <Route path='productList'>
       
         <Route path='items' >
       
           <Route index element={<Items />} />
       
           <Route path='add' element />
       
           <Route path=':id/edit' element />
       
         </Route>
       
         <Route path='stations' >
       
           <Route index element={<Stations />} />
       
         </Route>

        </Route>

      </Route>

    </Route>

</Routes> 

</BrowserRouter>

    </div>
  )
}

export default App