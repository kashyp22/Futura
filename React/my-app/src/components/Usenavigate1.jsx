import React from 'react'
import { useNavigate } from 'react-router-dom'
// dout not working 
const Usenavigate1 = () => {
const nav=useNavigate()

    const display=()=>{
        nav('/')
        console.log({nav});
    }

  return (
    <div>
        <h1>usenavigate</h1>
        <button onclick={display} onChange={display}>clickmee</button>
        
    </div>
  )
}

export default Usenavigate1