import React, { useRef } from 'react'

function Useref() {

    const sampleref=useRef()

    function show(){
        sampleref.current.style.backgroundColor='red'
    }
  //   function show1(){
  //     sampleref.current.style.backgroundColor='black'
  // }
    
  return (
    <div style={{backgroundColor:"green"}} ref={sampleref}>
        <h1>hellow</h1>
        <button onClick={show}>click</button>
        {/* <button onClick={show1}>click</button> */}
    </div>
    
  )
}

export default Useref
