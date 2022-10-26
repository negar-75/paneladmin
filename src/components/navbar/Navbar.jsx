import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import {DarkModeContext} from '../../context/darkModeContext'
function Navbar() {
 const{darkMode,setDarkMode} = React.useContext(DarkModeContext)
  return (
    <div className='navbar'>
       <div className="wrapper">
        <div className="search">
            <input type="text" placeholder='Search...' />
            <SearchIcon />
        </div>
        <div className="items">
            <div className="item">
                English
                <LanguageIcon className='icon' />
            </div>
            <div className="item" onClick={() => setDarkMode(pre => !pre)}>
                <DarkModeOutlinedIcon className='icon' />
            </div>
            <div className="item">
                <FullscreenExitOutlinedIcon className='icon'/>
            </div>
            <div className="item">
                <NotificationsOutlinedIcon className='icon'/>
                <div className="counter">1</div>
            </div>
            <div className="item">
                <ChatBubbleOutlineOutlinedIcon className='icon'/>
                <div className="counter">2</div>
           </div>
            <div className="item">
                <FormatListBulletedOutlinedIcon className='icon'/>
            </div>
            <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
       </div>
        </div>
  )
}

export default Navbar