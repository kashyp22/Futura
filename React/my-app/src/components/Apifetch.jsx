
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Propsdrill from '../components/Propsdrill'
import './Apistyle.css'



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
    <div className='card1'>
        <div className='card2'>
            {state.map((hellow)=>(
                <>
                <div id='one1'>
                <h1 >{hellow.name}</h1>
                <h5>{hellow.username}</h5>
                <button>click</button>
                </div>
                
                </>
            )
            )}
            </div>
        <Propsdrill  value={state}/>
    </div>
  )
}

export default Apifetch