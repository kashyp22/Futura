// 18-11-2023
import React, { useState } from 'react'

const Loginform = () => {


    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
const display=()=>{
    console.log({email,password});
}



  return (
    <div>
    

        <div id='head'>
            <h1>LOGIN FORM</h1>
        </div>      
        <div>
                <input type="email" name="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
            
        </div>
        <div> 
                <input type="password" name="password" placeholder='password'onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div>
            <button onClick={display}>Login</button>
        </div>









    </div>
  )
}

export default Loginform