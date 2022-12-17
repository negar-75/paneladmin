import React from 'react'
import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';


function Widget(props) {
  
 
 let data;
 let money = 500;
 let diff = 30;

 if(props.type === "user"){
  data ={
    title :"USERS",
    isMoney:false,
    link:"See all users",
    icon:<PersonOutlineOutlinedIcon className='widgetIcon' 
    style={{color:" #ad1111",
    backgroundColor:"rgba(255, 0, 0, 0.2)"
   }}
   />
  }

 }else if(props.type === "order"){
  data ={
    title :"ORDERS",
    isMoney:false,
    link:"See all orders",
    icon:<AddShoppingCartOutlinedIcon className='widgetIcon'
    style={{color:"goldenrod",
    backgroundColor:"rgba(218, 185, 32, 0.2)"
    }}
    />
  }


 }else if(props.type === "earning"){
  data ={
    title :"EARNING",
    isMoney:true,
    link:"See all earnings",
    icon:< MonetizationOnOutlinedIcon className='widgetIcon'
    style={{color:"green",
    backgroundColor:"rgba(0, 128, 0, 0.2)"
    }}
    />
  }
 }else{
  data ={
    title :"BALANCE",
    isMoney:true,
    link:"See balance",
    icon:<AccountBalanceWalletOutlinedIcon className='widgetIcon'
    style={{color:"#FF884B",
    backgroundColor:" #FFF9B0"
    }}
    />
  }
 }






  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"}{money}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className= {`percentage ${props.increase ? "positive":"negative"}`}>
               {props.increase ? <KeyboardArrowUpIcon />: <KeyboardArrowDownOutlinedIcon/>}
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget