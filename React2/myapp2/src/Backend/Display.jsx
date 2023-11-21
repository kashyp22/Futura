// import React from 'react'

// const Display = () => {
//   return (
//     <div>Display</div>
//   )
// }

// export default Display





// import axios from 'axios'
// import React, { useState } from 'react'

// const Display = () => {
//     const [state,setState]=useState()
//     console.log(state);
//     const handleClick= async(data1)=>{

//         try {
//         const res=await axios.get('http://localhost:3000/api/getmethod',data1);
//         console.log(' FIRSTdata', res.data);
//         setState(res.data);
//         }
//         catch(err){
//             console.log(err);
//         }
//     }
//     return(
//         <div>
//             <div>
//                 <button onClick={handleClick}>click to get data</button>
//             </div>

//             <div>
//                 <h1>data :</h1>
//                 <h5>
//                     {state.map((item) => (
//                         <>
//                         {/* <h4>id: {item._id}</h4> */}
//                         <h4>username: {item.username}</h4>
//                         <h4>password: {item.password}</h4>
//                         <h4>email:{item.email}</h4>
//                         </>
//                     ))}
//                 </h5>
//             </div>
//         </div>
//     )
// }
// export default Display
