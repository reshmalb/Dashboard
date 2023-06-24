import React from 'react'
import Sidebar from '../../Components/sidebar/Sidebar'
import NavBar from '../../Components/navbar/NavBar'
import profileimage from '../../assets/profile-photo.jpg'
import './Single.css'
import Chart from '../../Components/chart/Chart'
import List from '../../Components/list/List'
const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className='singleContainer'>
        <NavBar/>
       
    
      <div className='top'>
          <div className='left'>
            <h1 className='title'>Information</h1>
            <span className='editButton'> Edit</span>
             <div className='item'>
              <img alt=" " src={profileimage} className='itemImg'/>
           
             <div className='details'>
              <h1 className='itemTitle'> Reshma</h1>
              <div className='itemDetails'>
                <span className='itemKey'> Email:</span>
                <span className='itemValue'> reshma.lb27@gmail.com</span>
              </div>
              <div className='itemDetails'>
                <span className='itemKey'> Phone:</span>
                <span className='itemValue'> 4654646556</span>
              </div>
               <div className='itemDetails'>
                <span className='itemKey'> Address:</span>
                <span className='itemValue'> Bangalore</span>
              </div>
              <div className='itemDetails'>
                <span className='itemKey'> Country:</span>
                <span className='itemValue'> India</span>
              </div>
             </div>
             </div>
          </div>
          <div className='right'>
          <Chart title="Users Spending (Last 6 Months)" aspect={3/1}/>
          </div>
     </div>
     <div className='bottom'>
          <List/>
  </div>
  </div>
   
    </div>
  )
}

export default Single
