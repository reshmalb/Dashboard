import React from 'react'
import './Widget.css'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({type}) => {
    let data;
    switch(type){
        case "customers":
            data={
                    title:"CUSTOMERS",
                    isMoney:false,
                    link:"See Details",
                    icon:<PersonOutlineOutlinedIcon
                                 className='widget_icon'
                                 style={{backgroundColor:"#ff000033", color:"purple"}}
                                 />
            }
            break;
            case "orders":
            data={
                    title:"ORDERS",
                    isMoney:false,
                    link:"View all orders",
                    icon:<ShoppingCartOutlinedIcon
                     className='widget_icon'
                     style={{backgroundColor:"lightyellow" , color:"yellow"}}/>
            }
            break;
            case "earnings":
                data={
                        title:"TOTAL EARNINGS",
                        isMoney:true,
                        link:"View net eaernings",
                        icon:<MonetizationOnOutlinedIcon
                         className='widget_icon'
                         style={{backgroundColor:"lightgreen" ,color:"green"}}/>
                }
                break;
                case "balance":
                    data={
                            title:"MY BALANCE",
                            isMoney:true,
                            link:"Withdraw money",
                            icon:<AccountBalanceWalletOutlinedIcon 
                            className='widget_icon'
                            style={{backgroundColor:"lightred", color:"red"}}/>
                    }
                    break;
           default:break; 
    }


  return (
    <div className='widget'>
      <div className='widget_left'>
            <span className='widget_title'> {data.title} </span>
            <span className='widget_counter'> {data.isMoney && '$'} </span>
            <span className='widget_link'> {data.link} </span>

     </div>
     <div className='widget_right'>
     <div className='widget_percentage-positive'>
        <KeyboardArrowUpOutlinedIcon />
        50%
       </div>
     {data.icon}

     </div>
    </div>
  )
}

export default Widget
