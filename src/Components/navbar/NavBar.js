import React from 'react'
import './NavBar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import Switch from '@mui/material/Switch';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import prolileimage from '../../assets/profile-photo.jpg'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar_container'>
      <div className='navbar_search'>
        <input type="text" placeholder='search'/>
        <SearchOutlinedIcon/>
        
      </div>
      <div className='navbar_items'>
        <div  className='navbar_item_individual'>
          <LanguageOutlinedIcon className='navbar_icon'/>
          <span>English</span>
        </div>
        <div  className='navbar_item_individual'>
        <Switch style={{color:"#210876"}}
          defaultChecked className='navbar_icon' />
        </div>
        <div  className='navbar_item_individual'>
          <FullscreenOutlinedIcon defaultChecked className='navbar_icon' />
        </div>
        <div  className='navbar_item_individual'>
          <NotificationsActiveOutlinedIcon defaultChecked className='navbar_icon' />
          <div className='counter'> 3</div>

        </div>
        <div  className='navbar_item_individual'>
          <ChatBubbleOutlineOutlinedIcon defaultChecked className='navbar_icon' />
        <div className='counter'>5</div>

        </div>
        <div  className='navbar_item_individual'>
          <FormatListBulletedOutlinedIcon defaultChecked className='navbar_icon' />
        </div>
        <div  className='navbar_item_individual' >
          <img  src={prolileimage} alt='profileimage' className="profile_images" />
          </div>
      </div>
      </div>
    </div>
  )
}

export default NavBar
