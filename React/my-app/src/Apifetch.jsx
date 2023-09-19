
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Propsdrill from './Propsdrill'



function Apifetch() {

    const [state,setstate]=useState([])
    useEffect(()=>{

        async function display(){
            const res=await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log('api data',res.data);
            setstate(res.data)
        }
        display()
    },[])

    console.log('state data',state);




  return (
    <div>
        {state.map((li)=>(
            <>
            <h1>{li.name}</h1>
            <h5>{li.username}</h5>
            </>
        )
        )}
        <Propsdrill  value={state}/>
    </div>
  )
}

export default Apifetch