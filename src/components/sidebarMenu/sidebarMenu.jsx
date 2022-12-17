import React from 'react'
import './sidebarMenu.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import store from '../../store';
import {logout} from '../../actions/auth';
import { Link }  from "react-router-dom";
import {handleDropDown} from '../../actions/dropDownMenu';
import { useSelector } from 'react-redux';
import {sidebarMenuItems} from '../../sidebarMenuSource';


function Menu() {
  
  const [activeIndex, setActiveIndex] = React.useState(() => { 
    const initialIndex = 
      window.location.pathname === '/menu/menuCatalogue' ? 0 
      : window.location.pathname === '/FAQ' ? 1 
        : window.location. pathname === 'Search-sec' ? 2 
          : " "; 
    return initialIndex; 
  });
  // console.log(activeIndex,'activeIndex');

  const [activePage, setActivePage] = React.useState(() => { 
    const initialIndex = 
      window.location.pathname === '/menu/menuCatalogue' ? "/menu" 
      : window.location.pathname === '/invoice' ? '/invoice' 
        : window.location. pathname === '/customers' ? '/customers' 
          : " "; 
    return initialIndex; 
  });


  
 
  const open  = useSelector(state => state.dropDown.open);
  const dropdownName  = useSelector(state => state.dropDown.dropdowmMenuName);

 return (
    <div className='menu'>
      <ul className="sidebar-menu">
      {sidebarMenuItems.map((item)=>{
        if(item.subMenu ){
          return(
            <li className='sidebar-menu-item' id={item.name}>
              <a className={`dropdownlink  ${activePage === item.url? 'active': " "}`}  onClick={()=>store.dispatch(handleDropDown(`${item.name}`))}> {item.icon} 
             {item.name}
             <ExpandMoreIcon className={ dropdownName === `${item.name}` && open  ? 'fa-chevron-down open' : 'fa-chevron-down'} />
              </a>
              <ul className={`collapse ${ dropdownName ===  `${item.name}` && open ? "show": ' '}`} >
                {item.subItems.map((sub)=>{
                  return(
                  <Link to='/menu/menuCatalogue' className='link'>
                    <li className={activeIndex === sub.activeIndex ? 'active' : " "}>
                     {sub.name}
                    </li>
                  </Link>
                  )
                })}
              </ul>
           </li>
          )

        }else if(!item.subMenu && !item.logOut){
          return(
            <Link to={item.url}>
            <li className='sidebar-menu-item' id={item.name}>
              {item.icon}
              <span>{item.name}</span>
            </li>
            </Link>
          )
        }else {
          return(
            <li className='sidebar-menu-item' id={item.name} onClick={() => store.dispatch(logout())}>
              {item.icon}
              <span>{item.name}</span>
            </li>
            
          )
        }
      })} 
  </ul>
    </div>
  )
}

export default Menu