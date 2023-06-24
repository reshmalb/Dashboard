import React from 'react'
import './New.css'
import Sidebar from '../../Components/sidebar/Sidebar'
import NavBar from '../../Components/navbar/NavBar'
const New = () => {
  return (
    <div className='newPage'>
      <Sidebar/>
      <div className='newContainer'>
        <NavBar/>
        </div>
    </div>     
  )
}

export default New;
