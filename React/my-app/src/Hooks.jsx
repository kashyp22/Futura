import React, { useState } from 'react'
// import styled from 'styled-components'
import Child from './Child'


function Hooks() {
    const [state1,setstate]=useState(0)

        function plus(){
            setstate(state1+1)
        }
        
        function minus(){
            setstate(state1-1)
        }
       
        function reset(){
            setstate(0)
        }

  return (
    <div>
        <h1>{state1}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={reset}>reset</button>
        <Child value={state1}/>

    </div>
  )
}

export default Hooks



