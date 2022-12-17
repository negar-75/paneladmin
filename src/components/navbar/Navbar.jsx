import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import store from '../../store'
import {TOGGLE} from '../../actions/type'


function Navbar() {
 
 let userName = localStorage.getItem('username') 
 
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
            <div className="item" onClick={() => store.dispatch({type:TOGGLE})}>
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
              {userName !==null && <span className='username'>Hey <span>{userName}</span> !</span>}
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