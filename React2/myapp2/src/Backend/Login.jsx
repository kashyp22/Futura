import React, { useState } from 'react'
import { signupdata } from './apicall'

const Login = () => {

    const[username,setusername]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const[image,setImage]=useState({});

    const display=()=>{
        signupdata({username,email,password})
        console.log(username,email,password);
    }
  return (
    <div>

    <form action="" onSubmit={display} encType='multipart/form-data'>
      <div><h1>Sign Up</h1></div>
        <div>
            <input type="text" placeholder='username' value={username} onChange={(e)=>setusername(e.target.value)}/> <br />
            <input type="email" placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)}/> <br />
            <input type="password" placeholder='password' value={password}onChange={(e)=>setpassword(e.target.value)}/> <br />
            <input type="file"  filename='image' onChange={(e)=>setImage(e.target.files)} />
            <br /><button type='submit'>Submit</button>

            
            
        </div>
      </form>
    </div>
  )
}

export default Login



// import axios from 'axios'
// import React, { useState } from 'react'

// const Login = () => {
//     const [state,setState]=useState()
//     const handleClick= async(data1)=>{
//         const res=await axios.get('http://localhost:3000/api/getmethod',data1);
//         console.log(' FIRSTdata', res.data);
//         console.log('data1',data1);
//     }
//     return(
//         <div>
//             <div>
//                 <button onClick={handleClick}>click to get data</button>
//             </div>
//         </div>
//     )
// }
// export default Login
  

//  for aswathi.......

// import React from 'react'
// import axios from 'axios'

// const Login = () => {

//     const handleClick= async(data)=>{
//         const res=await axios.get('http://localhost:3000/api/getmethod',data)


//     }
//   return (
//     <div>
//         <button onClick={handleClick}>clikkkkkkk</button>
//     </div>
//   )
// }

// export default Login

// from*******************github

// import axios from 'axios';
// import React, { useState } from 'react';

// const Login = () => {
//     const [responseData,setResponseData] = useState([]);

//     const handleClick =async(data1) => {
//         try {
//             const res =await axios.get('http://localhost:3000/api/getmethod/:d', data1);
//             console.log('FIRST data', res.data);
//             // console.log('FIRST data23343', res.username);


//             // Set the response data in the state
//             setResponseData(res.data);
//             // console.log('s;kajbbs;kjb',setResponseData);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     return (
//         <div>
//             <div>

//                 <button onClick={ handleClick}>click to get data</button>
//             </div>
//             <div>
//                 <input type="text" />
//             </div>

//             {/* Render the data in the user interface */}
//             <div>
//                 <h2>Data:</h2>
//                 <ul>
//                     {responseData.map((item) => (
//                         <>
//                         <h4>id:   {item._id}</h4>
//                         <h4>Username :{item.username}</h4>
//                         <h4> Email :{item.email}</h4>
//                         </>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Login;
