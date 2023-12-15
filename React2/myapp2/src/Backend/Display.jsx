// import React from 'react'

// const Display = () => {
//   return (
//     <div>Display</div>
//   )
// }

// export default Display





import axios from 'axios'
import React, { useState } from 'react'

const Display = () => {
    const [state1,setState]=useState()
    console.log('first',state1);
    const handleClick= async()=>{

        try {
        const res=await axios.get('http://localhost:3000/api/getmethod');
        console.log(' FIRSTdata', res.data);
        setState(res.data);

        }
        catch(err){
            console.log(err);
        }
    }
    console.log('fundaaa',state1);
    return(
        <div>
            <div>
                <button onClick={handleClick}>click to get data</button>
            </div>

            <div>

                
            {state1 && state1.length > 0 ? (
                    state1.map((li, index) => (
                        <>
                        <h5 key={index}> username :{li.username}</h5>
                        <h6 key={index}> email :{li.email}</h6>
                        </>
                    ))
                ) : (
                    <p>No data available</p>
                )}

               
                
            {/* {state1.map((li)=>(
                <h1>{li.username}</h1>
            ))} */}
             </div>
        </div>
    )
}
export default Display
