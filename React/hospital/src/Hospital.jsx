import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import images from './img1.jpg'
import Newabt from './Newabt';

function Hospital() {
  return (
    <div className='main'>

        <div className='navbar'>
                <AiOutlineSearch  className='icon1'/>
                <input className='input' type="text" placeholder='search' />
                <li>Home</li> 
                <li>About</li>
                <li>Medical servies</li>
                <li>Departments</li>
                <li>Time Table</li> 
        </div>

        <div className='img'>
            <img src={images} alt="none" width={'100%'} />
        </div>

    </div>


  )
}

export default Hospital