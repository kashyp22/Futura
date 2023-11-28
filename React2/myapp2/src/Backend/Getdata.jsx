import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Getdata = () => {
const [state,setstate]=useState([])
    useEffect(()=>{
       async function display(){
            const res=await axios.get('http://localhost:3000/api/getmethod')
            console.log('data ?',res.data);
setstate(res.data)
        } 
display()
    },[])
    console.log(state);
  return (
    <div>
{state.map((li)=>(
    <h1>{li.username}</h1>
))}
    </div>
  )
}

export default Getdata