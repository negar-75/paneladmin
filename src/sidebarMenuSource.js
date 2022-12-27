import DashboardIcon from '@mui/icons-material/Dashboard';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import GroupIcon from '@mui/icons-material/Group';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReceiptIcon from '@mui/icons-material/Receipt';
import TocIcon from '@mui/icons-material/Toc';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupsIcon from '@mui/icons-material/Groups';
export const sidebarMenuItems =[
 {
    id:1,
    url:"",
    name:'Dashboard',
    icon: <DashboardIcon className='icon'/>,
    subMenu:false,
    logOut:false
 },
 { 
    id:2,
    url:"/menu",
    name:'Menu',
    icon: <RestaurantMenuIcon className='icon'/>,
    subMenu:true,
    logOut:false,
    subItems:[
    { 
      id:3,
      name:'Menu Catalogue',
      activeIndex:0,
      url:'/menuCatalogue'
    },
    { 
      id:4,
      name:'products list',
      activeIndex:1,
      url:'/productList/items'
    },
  
   ]
 },
 {
   id:6,
   url:'/staffs',
   name:'Staff',
   subMenu:false,
   icon: <GroupIcon  className='icon'/>,
   logOut:false
},
{  
   id:7,
   url:"/invoices",
   name:'Invoices',
   icon: <ReceiptIcon  className='icon'/>,
   subMenu:true,
   logOut:false,
   subItems:[
   { 
     id:8,
     name:'Invoice 1',
     activeIndex:3,
     url:''
   },
   {
     id:9,
     name:'Invoice 2',
     activeIndex:4,
     url:''
   },
   {
     id:10,
     name:'Invoice 3',
     activeIndex:5,
     url:''
   }
  ]
},
{  id:11,
   url:'',
   name:'Orders',
   icon: <TocIcon className='icon'/>,
   subMenu:false,
   logOut:false
},
{  
   id:12,
   url:"/customers",
   name:'Customers',
   icon: <GroupsIcon className='icon'/>,
   subMenu:true,
   logOut:false,
   subItems:[
   { 
     id:13,
     name:'Customer 1',
     activeIndex:6,
     url:''
   },
   {
     id:14,
     name:'Customer 2',
     activeIndex:7,
     url:''
   },
   {
     id:15,
     name:'Customer 3',
     activeIndex:8,
     url:''
   }
  ]
},
{  
   id:16,
   url:"",
   name:'Stats',
   icon: <QueryStatsIcon  className='icon'/>,
   subMenu:false,
   logOut:false
},
{
  id:17,
   url:"",
   name:'Setting',
   icon: <SettingsIcon className='icon'/>,
   subMenu:false,
   logOut:false
},
{ 
   id:18,
   url:"",
   name:'Profile',
   icon: <AccountBoxIcon className='icon'/>,
   subMenu:false,
   logOut:false
},
{  
   id:19,
   url:"",
   name:'Logout',
   icon: <LogoutIcon className='icon'/>,
   subMenu:false,
   logOut:true
}
 

]