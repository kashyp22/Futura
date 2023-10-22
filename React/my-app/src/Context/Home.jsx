import React, { useContext } from 'react'
import { Usercontext } from './Context1'

const Home = () => {

  // User from the Context1
    const {User}=useContext(Usercontext)
    console.log(User);
  return (

    <div>Home
{/*  */}
      {User.map((helo)=>(
        <>
        <h1>nihala:{helo.name}</h1>
        <h5> username:{helo.username}</h5>
        <p>email:{helo.email}</p>
        <p>email:{helo.email}</p>
        </>
      )
      ) }
        
        
    </div>
  )
}

export default Home