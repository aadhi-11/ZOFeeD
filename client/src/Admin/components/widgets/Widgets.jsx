import React from 'react'
import './widgets.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
// import { red } from '@mui/material/colors';
const Widgets = ({type}) => {
    
    let data;
    //temporary
    const amount=100;
    const diff =20;
    switch(type)
    {
        case"customers":data={
            title:"customers",
            ismoney:false,
            link:"See All users",
            icon:
            (
                <PersonIcon 
                    className='icon'
                    style={{
                        color:"#131082",
                        backgroundColor: "#47aad1"
                    }}

            
            />
            )
        };
        break;
        case"order":data={
            title:"ORDERS",
            ismoney:false,
            link:"view All Orders",
            icon:(<StoreIcon className='icon'
            style={{
                
                color: "#535c00",
                backgroundColor:"#e9f0af",
            }}
            />)
        };
        break;
        case"Earnings":data={
            title:"EARNINGS",
            ismoney:true,
            link:"View Net Earnings",
            icon:(<CurrencyExchangeIcon className='icon'
            style={{
                color:"#056e1a",
                backgroundColor: "#89f599"
            }}
            />
            
            )
        };
        break;
        
        default:{
            break;
        }
    }
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">
            {data.title}
        </span>
        <span className="counter">
            {data.ismoney && "$"}{amount}
        </span>
        <span className="link">
            {data.link}
        </span>
      </div>
      <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUpIcon/>
            {diff}
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widgets
