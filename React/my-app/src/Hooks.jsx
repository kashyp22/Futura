import React, { useState } from 'react'
import styled from 'styled-components'
import Child from './Child'





function Hooks() {
    const [state,setstate]=useState(0)

    function display(){
        setstate(state+1)
    }
    function minus(){
        setstate(state-1)
    }
    function reset(){
        setstate(0)
    }



    
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={display}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={reset}>reset</button>
        <Child value={state}/>




    </div>
  )
}

export default Hooks