import React, { useEffect, useRef } from 'react'


function Useref2() {
   const sample1 = useRef()
   const sample2 = useRef()
   const Input1 =useRef()

    function show(){
        sample1.current.style.backgroundColor="green";
        sample2.current.style.color='white';
        sample2.current.innerHTML='<h1>india</h1>';
    }

        useEffect ( ()=>
        Input1.current.focus()
        )

    

  return (
    <div ref={sample1}>
        <h1 ref={sample2}>hellow</h1>

        <button onClick={show}>Click</button>
        <input type="text" placeholder='Name' ref={Input1} />
        <input type="text" placeholder='age' />
        <input type="text" placeholder='Place' />
    </div>
  )
}

export default Useref2