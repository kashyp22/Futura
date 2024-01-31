import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removedata } from '../Redux/Useredux'
import { profiledetails } from './apicall'
// import { Await } from 'react-router-dom'

const Homepage = () => {
    const [state1,setProfile]=useState()
    const dispatch=useDispatch()  

    const fulldata=useSelector((state)=>state.users.userValue)
    console.log('full data in homepage',fulldata);
    if (fulldata) {
        var id=fulldata[0]&&fulldata[0]._id      
    }
    console.log('homepage id', id);
    // console.log('dispacthhpp',dispatch);
    // const data12 = useSelector((state)=>state.users.userValue)
    // const data123 =  data12[0]._id;
    // console.log('data123',data123);
    // console.log('useselectorrrrrr',data123);
function deletedata(){
    dispatch(removedata())
  
}


  async function profile(){
  var data =await profiledetails(id);
  console.log('data in homepage profile',data.data);  

      setProfile(data && data.data)
      console.log('pppppppppp',state1);

}
    // async function update(){
    //   var data3 = await update(id);
    //   console.log('data3',data3);
    // }

  return (
    <div>
        <h1>homepage</h1>
        <button onClick={deletedata}>logout</button>


        <div>
          <button onClick={profile}>profile</button>

          <div>


         <h3>{state1 && state1.username} </h3>
         <h3>{state1 && state1.email} </h3>
    


          </div>


          {/* <input type="text" />
          <input type="text" />
          <button onClick={update}>submit</button> */}
        </div>
        
    </div>
  )
}

export default Homepage