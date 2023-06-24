import React, { useState } from 'react'
import './New.css'
import Sidebar from '../../Components/sidebar/Sidebar';
import NavBar from '../../Components/navbar/NavBar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
const New = ({inputs,title}) => {
  const [imagefile,setImageFile]=useState(null);
  return (
    <div className='newPage'>
      <Sidebar/>
      <div className='newContainer'>
        <NavBar/>
        <div className='top'>
          <h1>{title}</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img  src={imagefile ? URL.createObjectURL(imagefile): " "}  alt=""  className='image'></img>
          </div>
          <div className='right'>
            <form>
              <div className='formInput'>
                <label htmlFor='file'>
                  Image: <DriveFolderUploadIcon className='icon'/>
                </label>
                <input type='file'
                 id="file"
                  style={{display:"none"}}
                  onChange={(e)=>setImageFile(e.target.files[0])}
                  />
              </div>
              {
                inputs.map((input)=>(
                  <div className='formInput' key={input.id}>
                  <label>{input.label}:</label>
                  <input type={input.type}
                  id={input.id}
                  name={input.name} 
                   placeholder={input.placeholder}/>
  
                </div>

                )
                )
              }
{/*              
              <div className='formInput'>
                <label>Name:</label>
                <input type="text" id="name" placeholder='name'/>

              </div>
              <div className='formInput'>
                <label>Phone:</label>
                <input type="text" id="phone" placeholder='phone'/>

              </div>
              <div className='formInput'>
                <label>Password:</label>
                <input type="password" id="password" placeholder='password'/>

              </div>
              <div className='formInput'>
                <label>Address:</label>
                <input type="text" id="address" placeholder='address'/>

              </div> */}
              <button className='buttonSend' type="submit">Send</button>
            </form>
          </div>
          

        </div>
        </div>
    </div>     
  )
}

export default New;
