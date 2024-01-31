import React, { useState } from 'react'
import './Signup.css'
import { registerdata } from '../api/apicall';


const Signup = () => {

  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Images, setImages] = useState({});

  // const [registerinfo, setRegisterinfo] = useState('');

  let formdata = new FormData()
  formdata.append('username', username)
  formdata.append('email', email)
  formdata.append('password', password)
  formdata.append('Images', Images)


  console.log('Name', username, 'email', email, 'password', password, 'images', Images);

  const register = (e) => {
    e.preventDefault();
    console.log('forrrrrrrrrrrm', formdata);
    registerdata(formdata)

  }


  //  function register(){
  //   registerdata({username,email,password})
  //   registerdata(formdata)
  //   console.log(username,email,password);

  //  printing registration is completed
  //   if (registerdata) {
  //     console.log('registration completed');
  //     setRegisterinfo('registration completed')
  //     // history.push('../Login/Login.jsx')


  //   }else{
  //     console.log('unsuccessful registration');
  //     setRegisterinfo('unsuccessful registration')
  //   }
  //  }


  return (
    <div className='main'>

      {/* 
      <div>
      <h2>register here </h2>
      </div>

      <div className='main1'>
      <input type="name"  placeholder='name' onChange={(e)=>setName(e.target.value)}/>
      <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
      </div>

      <div>
        <button  onClick={register}>register your details</button>
      </div>

      <h5>{registerinfo}</h5>   */}

      <form onSubmit={register} encType='multipart/form-data'>
        <div><h1>Sign Up</h1></div>
        <div>
          <input type="text" placeholder='username' value={username} onChange={(e) => setName(e.target.value)} /> <br />
          <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
          <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
          <input type="file" filename='Images' onChange={(e) => setImages(e.target.files[0])} />
          <br /><button type='submit'>Submit</button>

          {/* <h5>{registerinfo}</h5> */}



        </div>
      </form>





    </div>
  )
}

export default Signup