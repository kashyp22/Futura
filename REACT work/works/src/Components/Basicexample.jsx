// import Accordion from 'react-bootstrap/Accordion';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function Basicexample() {



//     const [state,setstate]=useState([])
//     useEffect(()=>{
//        async function display(){
//             const res=await axios.get('http://localhost:3000/api/getmethod')
//             console.log('data ?',res.data);
// setstate(res.data)
//         } 
// display()
//     },[])
//     console.log(state);
//   return (
//     <div>
// {state.map((li)=>(
//     <h1>{li.username}</h1>
// ))}
//     </div>
//   )








//   return (
//     <Accordion defaultActiveKey="0">
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>Accordion Item #1</Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="1">
//         <Accordion.Header>Accordion Item #2</Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
//   );
// }

// export default Basicexample;





// import React from 'react'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { userDetails1 } from './redux/Useredux'

// const Basicexample = () => {

// const dispatch=useDispatch()
//   useEffect(()=>{
//     async function display(){
//       dispatch(userDetails1())
//       console.log('details',userDetails1);
//     }
//     display()
//   })

//   return (
//     <div>Basicexample</div>
//   )
// }

// export default Basicexample


// from chatgpt
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { userDetails1 } from './redux/Useredux';

// const Basicexample = () => {
//   const dispatch = useDispatch();
//   const userData = useSelector((state) => state.userDetails1); // Assuming 'userDetails' is the key in your Redux store

//   useEffect(() => {
//     async function display() {
//       dispatch(userDetails1());
//     }
//     display();
//   }, [dispatch]);

//   useEffect(() => {
//     console.log('UserDetails:', userData);
//   }, [userData]);

//   return <div>Basicexample</div>;
// };

// export default Basicexample;

// import React from 'react';
// import { useSelector } from 'react-redux';

// const Basicexample = () => {
//   // Use the useSelector hook to get the userValue1 from the Redux store
//   const userValue1 = useSelector((state) => state.user1.userValue1);

//   // Now you can use userValue1 in your component
//   console.log('User Details in AnotherComponent:', userValue1);

//   return (
//     <div>
//       {/* Render your component using the userValue1 data */}
//       {userValue1.map((user, index) => (
//         <div key={index}>{/* Render user details here */}</div>
//       ))}
//     </div>
//   );
// };

// export default Basicexample;


// import React from 'react';
// import { useSelector } from 'react-redux';

// const Basicexample = () => {
//   // Use the useSelector hook to get the userValue1 from the Redux store
//   const userValue1 = useSelector((state) => state.user1.userValue1);

//   // Now you can use userValue1 in your component
//   console.log('User Details in Basicexample:', userValue1);

//   // Concatenate user details into a string
//   // const userDetailsString = userValue1.map((user) => `${user.email} - ${user.username}`).join(', '); 

//   return (
//     <div>
//       {/* Render user details in an h1 element */}
//       <h1>User Details</h1>
//       <p>{userValue1[0]}</p>
//     </div>
//   );
// };

// export default Basicexample;


import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { profiledata } from './api/apicall';

const Basicexample = () => {
  // Use the useSelector hook to get the userValue1 from the Redux store
  // const userValue1 = useSelector((state) => state.user1.userValue1);
  // Now you can use userValue1 in your component
  // console.log('User Details in Basicexample:', userValue1);

  const fulldata = useSelector((state)=>state.userss.userValue1)
  console.log('fulldata',fulldata);
  if (fulldata) {
    var Id = fulldata[0] && fulldata[0]._id
    console.log('idddd',Id);
    
  }

  const [data,setdata]=useState();
  console.log('setdata',data);


  useEffect(()=>{
    async function display(){

      const res = await profiledata(Id);
      setdata(res.data)
      console.log('resssss',res);
    }
    display()
  },[])

  return (
    <div>
      {/* Render user details in an h1 element
      <h1>User Details</h1>
      {userValue1.length > 0 && (
        <p>
          Email: {userValue1[0].email}, Username: {userValue1[0]._id}
        </p>
      )} */}
      <div><h1>hii</h1></div>

      <div>
      {/* <h1>{data && data.Images}</h1> */}
      {data && <img src={`./Images/${data.Images}`} alt="" height={50} width={50}/>}
        <h1>{data && data.username}</h1>
        <h1>{data && data.email}</h1>
      
      </div>


    </div>
  );
};

export default Basicexample;

