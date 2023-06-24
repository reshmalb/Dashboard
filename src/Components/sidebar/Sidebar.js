import React from 'react'
import './Sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
    
      <div className='sidebar_top'>
        <Link to="/" style={{textDecoration:"none"}}>
        <span className='logo'>
              Dashboard
            </span>
        </Link>
            
        
      </div>
      <hr/>
      <div className='sidebar_bottom'>
     
        <ul>
          <p className='sidebar_bottom_title'>MAIN</p>
          <li>
            <DashboardIcon className='dashboard_icon'/>
            <span> Dashboard</span>
          </li>
          <p className='sidebar_bottom_title'> LISTS</p>
          <Link to="/customers" style={{textDecoration:"none"}}>
          <li>

            <PersonIcon className='dashboard_icon'/>
            <span> Users</span>
          </li>
          </Link>
          <Link to="/products" style={{textDecoration:"none"}}>
          <li>
            <LocalGroceryStoreIcon className='dashboard_icon'/>
            <span> Products</span>
          </li>
          </Link>
          <Link to="/" style={{textDecoration:"none"}}>
          <li>
            <CreditCardOutlinedIcon className='dashboard_icon'/>
            <span> Orders</span>
          </li>
          </Link>
          <p className='sidebar_bottom_title'> CHARTS</p>

          <li>
            <InsertChartOutlinedIcon className='dashboard_icon'/>
            <span> Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className='dashboard_icon'/>
            <span> Notifications</span>
          </li>
          <p className='sidebar_bottom_title'> SERVICE</p>
          <li>
            <SettingsApplicationsOutlinedIcon className='dashboard_icon'/>
            <span> Settings</span>
          </li>
        
          <li>
            <DnsOutlinedIcon className='dashboard_icon'/>
            <span> System Health</span>
          </li>
          <p className='sidebar_bottom_title'> USER INTERFACE</p>
          <li>
            <ManageAccountsOutlinedIcon className='dashboard_icon'/>
            <span> Profile</span>
          </li>
          <li>
            <CalendarMonthOutlinedIcon className='dashboard_icon'/>
            <span> Calender</span>
          </li>
          <li>
            <DiamondOutlinedIcon className='dashboard_icon'/>
            <span> Helper</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className='dashboard_icon'/>
            <span> Logout</span>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Sidebar
