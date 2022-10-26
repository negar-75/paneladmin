import React from 'react'
import "./sidebar.scss"
import GroupIcon from '@mui/icons-material/Group';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import TocIcon from '@mui/icons-material/Toc';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link }  from "react-router-dom"
import {DarkModeContext} from '../../context/darkModeContext'

function Sidebar() {

    const {setDarkMode} = React.useContext(DarkModeContext)
  return (
    <div className='sidebar'>
        <Link to = "/" style={{textDecoration : 'none'}}>
        <div className="top"><span className='logo'>lamadmin</span></div>
        </Link>
        <div className="center">
            <ul>
                <p className='title'>MAIN</p>
                <Link to = "/" style={{textDecoration : 'none'}}>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                </Link>
                <p className='title'>LISTS</p>
                <Link to = "/users" style={{textDecoration : 'none'}}>
                <li>
                    <GroupIcon className='icon' />
                    <span>Users</span>
                </li>
                </Link>
                <Link to = "/products" style={{textDecoration : 'none'}}>
                <li>
                    <ProductionQuantityLimitsIcon  className='icon'/>
                    <span>Products</span>
                </li>
                </Link>

                <Link to = "/" style={{textDecoration : 'none'}}>
                <li>
                    <TocIcon  className='icon' />
                    <span>Orders</span>
                </li>
                </Link>
                <Link to = "/" style={{textDecoration : 'none'}}>
                <li>
                    <LocalShippingIcon  className='icon'/>
                    <span>Delivery</span>
                </li>
                </Link>
                
                <p className='title'>USEFUL</p>
                <Link to = "/" style={{textDecoration : 'none'}}>
                 <li>
                    <QueryStatsIcon  className='icon'/>
                    <span>Stats</span>
                </li>
                </Link>

                <li>
                    <NotificationsIcon  className='icon'/>
                    <span>Notification</span>
                </li>

                <p className='title'>SERVICES</p>

                <li>
                    <SettingsSystemDaydreamIcon  className='icon' />
                    <span>System Health</span>
                </li>
                <li>
                    <ReceiptLongIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon  className='icon'/>
                    <span>Settings</span>
                </li>

                <p className='title'>USER</p>

                <li>
                    <AccountBoxIcon  className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon  className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={() => {setDarkMode(false)}}></div>
            <div className="colorOption" onClick={() => {setDarkMode(true)}}></div>
            
        </div>
    </div>
  )
}

export default Sidebar