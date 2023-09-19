import React, { useEffect, useState } from 'react'


function Useeffect() {

    const [state,setstate]=useState(0)

    useEffect(()=>{

        console.log("yooooooo1")

    },[state])



  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>setstate(state+1)}>clikoo</button>
       
    </div>
  )
}

export default Useeffect