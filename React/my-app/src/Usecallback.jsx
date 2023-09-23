import React, { useCallback, useState } from 'react'
import { Hello } from './Usecallback2';

function Usecallback() {
  const [state,setState]=useState(0)
    const [state1,setState1]=useState(0)
    console.log('parent rendered');
    function show(){
        setState(state+1)
    }
    function show1(){
        setState1(state1+1)
    }
    // const Avoidingrender = useCallback(Hello, [state]);
    // const Avoidingrender = useCallback(() => <Hello />, [state]);
    const RREnder = useCallback(Hello, [state]);
  return (
    <div>
      <h2>{state}</h2>
      <h2>{state1}</h2>
      <button onClick={show}>click1</button>
      <button onClick={show1}>click</button>
      <Hello value={RREnder}/>

      {/* <Hello value={state}/> */}
    </div>
  )
}

export default Usecallback



// import React, { useState } from 'react'
// import {Hello} from './Reacttwo';

// const ReactMemo = () => {
//     const [state,setState]=useState(0)
//     const [state1,setState1]=useState(0)
//     console.log('parent rendered');

//     function show(){
//         setState(state+1)
//     }

//     function show1(){
//         setState1(state1+1)
//     }

//   return (
//     <div>
// <h2>{state}</h2>
// <h2>{state1}</h2>
// <button onClick={show}>click</button>
// <button onClick={show1}>click</button>
// <Hello value={state}/>
//     </div>
//   )
// }

// export default ReactMemo