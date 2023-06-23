import React from 'react'
import Sidebar from '../../Components/sidebar/Sidebar'
import NavBar from '../../Components/navbar/NavBar'
import './Home.css'
import Widget from '../../Components/widget/Widget'
import Featured from '../../Components/feature/Featured'
import Chart from '../../Components/chart/Chart'

const Home = () => {
  return (
    <div className='home'>
          <Sidebar/>
        <div className='home_container'>
          <NavBar/>
          <div className='home_widget'>
            <Widget type="customers"         />
            <Widget type="orders"/>
            <Widget type="earnings"/>
            <Widget  type="balance"/>             
          </div>
          <div className='charts'>
            <Featured/>
            <Chart/>

          </div>
        </div>
   </div>
  )
}

export default Home
