// 18-11-2023
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Loginapi} from '../Backend/apicall'

const Loginform = () => {
// Get the dispatch function with the useDispatch hook, and dispatch actions as needed   
    const dispatch=useDispatch()
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();


    const display=()=>{
    console.log({email,password});
    try{
        Loginapi(dispatch,{email,password})
    }catch(err){
        console.log(err);
    }
}
//  Read data from the store with the useSelector hook
 const datan=useSelector((state)=>state.users.userValue)
 console.log(datan);



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