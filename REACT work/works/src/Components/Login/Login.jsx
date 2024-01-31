import React, { useState } from 'react'
// import './Login.css'
import { Link } from 'react-router-dom'
import { logindata } from '../api/apicall';
import { useDispatch, useSelector } from 'react-redux';


const Login = () => {
  //  dispatch to login section work
  const dispatch=useDispatch()

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();


  // console.log('email',email);
  // console.log('password',password);

  function login() {

    logindata({email,password})
    try{
      logindata(dispatch,{email,password})
    console.log('email',email,'password',password);

    }catch(err){
      console.log(err);
    }

  }
  const datainlogin=useSelector((state)=>state.userss.userValue1)
  console.log('datainlogin',datainlogin);



  
  return (
    <div>

        <div>
            <h1>login form</h1>
        </div>

        <div>
            <input type="email" name='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" name='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <div>
        <button onClick={login}>login</button>
        <button><Link to={'/signup'} >Signup</Link></button>
        
        </div>

        <div>
          {/* <Link to={''}>forgot password</Link> */}
        </div>


    </div>
  )
}

export default Login