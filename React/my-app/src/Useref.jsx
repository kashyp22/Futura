import React, { useRef } from 'react'

function Useref() {

    const sampleref=useRef()
    function show(){
        sampleref.current.style.backgroundColor='red'
    }


  return (
    <div ref={sampleref}>
        <h1>hellow</h1>

        <button onClick={show}>click</button>

    </div>
    
  )
}

export default Useref