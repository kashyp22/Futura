import React, { useEffect, useState } from 'react'
import axios from 'axios'
import First from './First'
const Card = () => {
    const [state,usestate]=useState([])

    
    const [state1,usestate1]=useState([0])

    function click(){
        usestate1 (parseInt(state1 + 1));
    }
    function reset(){
        usestate1([0])

    };

    useEffect(()=>{
        async function Api(){
            const api1=await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log('helow',api1.data);
            usestate(api1.data)
        }
        Api()
    },[])

  return (
    <div className='main-card'>

        {/* <h1>{state1}</h1> */}
        <First state1={state1}/>
        <div className='one1'>
            {/* <h1>{state1}</h1> */}
            



            {state.map((hi)=>(
                <>
                <div className='card2'>
                <h3>{hi.id}</h3>
                <h2>{hi.name}</h2>
                <button onClick={click}>add to hello</button>  
                <button onClick={reset}> reset</button>
                </div>
                </>

            
            )           
            )}
            
        </div>


    </div>
  )
}

export default Card



