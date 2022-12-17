import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './menuCatalogue.scss'
import Menugrid from '../../components/menuGrid/menugrid';
import CreateCategory from '../../components/createCategory/createCategory';

function MenuCatalogue() {
  const [success,setSuccess] = React.useState(false);
  const [inputValue,setInputValue] = React.useState(false);
  
  
  return (
    <div className='menuCatalogue'>
        <Sidebar />
        <div className="menuCatalogue-container">
            <Navbar />
            <CreateCategory 
            setSuccess = {setSuccess}
            inputValue = {inputValue}
            setInputValue = {setInputValue}
            />
            <Menugrid
            success = {success}
            setSuccess = {setSuccess}
             />

        </div>
    </div>

  )
}

export default MenuCatalogue