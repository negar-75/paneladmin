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
     
    url:"",
    name:'Dashboard',
    icon: <DashboardIcon className='icon'/>,
    subMenu:false,
    logOut:false
 },
 { 
    url:"/menu",
    name:'Menu',
    icon: <RestaurantMenuIcon className='icon'/>,
    subMenu:true,
    logOut:false,
    subItems:[
    { 
      name:'Menu Catalogue',
      activeIndex:0,
      url:'/menu/menuCatalogue'
    },
    {
      name:'products list',
      activeIndex:1,
      url:''
    },
    {
      name:'Add product',
      activeIndex:2,
      url:''
    }
   ]
 },
 {
   url:'/staffs',
   name:'Staff',
   subMenu:false,
   icon: <GroupIcon  className='icon'/>,
   logOut:false
},
{
   url:"/invoices",
   name:'Invoices',
   icon: <ReceiptIcon  className='icon'/>,
   subMenu:true,
   
   logOut:false,
   subItems:[
   { 
     name:'Invoice 1',
     activeIndex:3,
     url:''
   },
   {
     name:'Invoice 2',
     activeIndex:4,
     url:''
   },
   {
     name:'Invoice 3',
     activeIndex:5,
     url:''
   }
  ]
},
{
   url:'',
   name:'Orders',
   icon: <TocIcon className='icon'/>,
   subMenu:false,
   logOut:false
},
{
   url:"/customers",
   name:'Customers',
   icon: <GroupsIcon className='icon'/>,
   subMenu:true,
   
   logOut:false,
   subItems:[
   { 
     name:'Customer 1',
     activeIndex:6,
     url:''
   },
   {
     name:'Customer 2',
     activeIndex:7,
     url:''
   },
   {
     name:'ICustomer 3',
     activeIndex:8,
     url:''
   }
  ]
},
{
   url:"",
   name:'Stats',
   icon: <QueryStatsIcon  className='icon'/>,
   subMenu:false,
   logOut:false
},
{
   url:"",
   name:'Setting',
   icon: <SettingsIcon className='icon'/>,
   subMenu:false,
   logOut:false
},
{
   url:"",
   name:'Profile',
   icon: <AccountBoxIcon className='icon'/>,
   subMenu:false,
   logOut:false
},
{
   url:"",
   name:'Logout',
   icon: <LogoutIcon className='icon'/>,
   subMenu:false,
   logOut:true
}
 

]