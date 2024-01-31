import React, { useState } from 'react'
import { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { profiledata, updateData } from '../api/apicall'
import './Update.css'

const Update = () => {

  const fulldata = useSelector((state)=>state.userss.userValue1)
  console.log('fulldata',fulldata);
  if (fulldata) {
    var Id = fulldata[0] && fulldata[0]._id
    console.log('idddd',Id);
    
  }


    const [Email,setEmail]=useState('')
    const [userName,setUsername]=useState('')
    const [updateDdata,setUpdate]=useState('')
    // console.log('username',userName);

   
    // const data = useSelector((state)=>state.user1.userValue1[0])
   

    const  upDate1 = (async()=>{
      try{
      
        const data1 = await updateData({id: Id, userName, Email})
       console.log('dataaa',data1.data);
     
          const updateddata = data1.data
          setUpdate(updateddata)

      }catch(err){
        console.log(err);

      }
    })
    


    
    useEffect(()=>{

      async function databasedata(){
     const data = await profiledata(Id);
  console.log('dataa',data);

  const databasedata1=data.data
  console.log('databasedarta',databasedata1);

    
  setEmail(databasedata1.email || '')
  setUsername(databasedata1.username)

 

  } databasedata()

    // setState1(userName)
},[Id])
console.log('email',Email);
console.log('username',userName);


  return (
    <div>

      <div className='heloq'>
        <h1>profile dataaa</h1>

        <div className='one'>
              <input className='inpt1' type='email'  placeholder='email'  value={Email}  onChange={(e)=>setEmail(e.target.value)} />
              <br />
              <input className='inpt2'  type="text" placeholder='username' value={userName} onChange={(c)=>setUsername(c.target.value)}/>
              <br />

              <button className='btn1' onClick={upDate1}><h5>update</h5></button>
        </div>

        <h4> updated email : </h4>
        <p>{updateDdata.email}</p>

        <h4> updated username : </h4>
        <p>{updateDdata.username}</p>

        </div>



    </div>
  )
}

export default Update




// import React, { useEffect, useState } from 'react'
// import './Update.css'
// import { useSelector } from 'react-redux'
// // import { updateProfile } from './Apicall'
// // import { userRequest } from './RequestMethod'

// const Update = () => {

//   const [FirstName, setFirstName] = useState('')
//   const [SecondName, setSecondName] = useState('')
//   const [Age, setAge] = useState('')
//   const [Address, setAddress] = useState('')
//   const [Email, setEmail] = useState('')
//   const [Password, setPassword] = useState("")
//   const [id, setId] = useState("")

//   const value = useSelector((state) => state.user1.userValue1[0])
//   console.log('454545', value);

//   useEffect(() => {
//     // setId(value.id)
//     // setFirstName(value.FirstName || '');
//     // setSecondName(value.SecondName || '');
//     // setAge(value.Age);
//     // setAddress(value.Address);
//     setEmail(value.email || '');
//     // setPassword(value.Password);
//   }, [value])

//   // const updateValue=()=>{
//   //   updateProfile(id,{ FirstName, SecondName, Age, Address, Email, Password });
   
//   // }
// //   const updateValue = async () => {
// //     try {

      
// //         // const updatedData = await updateProfile(id, {
// //         //     FirstName,
// //         //     SecondName,
// //         //     Age,
// //         //     Address,
// //         //     Email,
// //         //     Password
// //         // });

// //         // Handle success - you can log or perform other actions as needed
// //         console.log("Update successful:", updatedData);
// //         return updatedData
// //     } catch (error) {
// //         // Handle the error - log, display a message, or take appropriate actions
// //         console.error("Update failed:", error);
// //     }
// // };

//   return (
//     <div>
//       <div className='main'>
//         <div className='update-head'>
//           <h2>Update</h2>
//           <div className='update-details'>

//             {/* <input type="text" placeholder='firstname' value={FirstName}  className='.inp1' />
//             <input type="text" placeholder='SecondName' value={SecondName} onChange={(e) => setSecondName(e.target.value)} className='inp2' />
//             <input type="text" placeholder='age' value={Age} onChange={(e) => setAge(e.target.value)} className='inp3' />
//             <input type="text" placeholder='address' value={Address} onChange={(e) => setAddress(e.target.value)} className='inp4' /> */}
//             <input type="email" placeholder='email' value={Email} onChange={(e) => setEmail(e.target.value)}  />
//             {/* <input type="password" placeholder='password' value={Password} onChange={(e) => setPassword(e.target.value)} /> */}
//             {/* <button className='U-btn' onClick={updateValue}> Update</button> */}

//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Update