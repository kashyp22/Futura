// import React, { useState } from 'react'


// function Reactone() {
//     const [state,setState]=useState(0)
//     const [state1,setState1]=useState(0) 
//     console.log('parent renderd');

//     function Show() {
//         setState(state+1)        
//     }
//     function Show1(){
//         setState1(state1+1)
//     }


//   return (
//     <div>
//         <h2>state :{state}</h2>
//         <h2>state1 :{state1}</h2>
//         <button onClick={Show}>click1</button>
//         <button onClick={Show1}>click2</button>
//         <Reactone value={state}/>

//     </div>
//   )
// }

// export default Reactone




import React, { useState } from 'react'
import  {Avoiding_child_render} from './Reacttwo';
import Reacttwo from './Reacttwo';

const ReactMemo = () => {
    const [state,setState]=useState(0)
    const [state1,setState1]=useState(0)
    console.log('parent rendered');

    function show(){
        setState(state+1)
    }

    function show1(){
        setState1(state1+1)
    }

  return (
    <div>

          <h2>state:{state}</h2>
          <h2>state1:{state1}</h2>  
          <button onClick={show}>click</button>
          <button onClick={show1}>click</button>
          {/* <Hello props={state}/> */}
          {/* <Hello value={state}/> */}
          {/* <Reacttwo value={state1}/> */}
          <Avoiding_child_render anyvalue={state1}/>
    </div>
  )
}

export default ReactMemo