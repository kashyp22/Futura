
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { removeData, start } from '../Redux/Redux1'

const Reduxuseffect = () => {
    const [state,setstate]=useState([])
// 26-09-2023 A data fetching through redux
    const dispatch=useDispatch();
    useEffect(()=>{
        async function display(){
            const res=await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(res.data);
            setstate(res.data)
            dispatch(start(res.data))
        }
        display()

        
    },[])
    console.log('state data',state);

    const display = ()=>{
        dispatch(removeData())
    }


  return (
    <div>
        
       {/* {state.map((li)=>(
            <>
            <h1>{li.email}</h1>
            <h5>{li.username}</h5>
            </>
        )
        )} */}
        <button onClick={display}>click for removing data</button>
    </div>
  )
}

export default Reduxuseffect