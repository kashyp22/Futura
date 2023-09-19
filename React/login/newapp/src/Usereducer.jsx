import { useReducer } from "react"

export const Usereducer = () => {

    const initialstate = 1;



        const reducer = (state1, action1) => {
            console.log('action1', action1);
            if (action1.type === 'increase') {
              return state1 + 1;
            } else if (action1.type === 'decrease') {
              return state1>0 ? state1-1: state1;
            } else if (action1.type === 'increase2') {
              return state1 + 2;
            } else if (action1.type === 'decrease2') {
              return state1>0? state1-2:state1;
            } else if (action1.type === 'multiply') {
              return state1 * 2;
            } else {
              return state1;
            }
          };
    

    const[state1,dispatch]=useReducer(reducer,initialstate)

  return (
    <div>

        <h2>{state1}</h2>
        {/* <h2>hellow</h2> */}
        <button onClick={()=>dispatch({type:'increase'})}>increase</button>
        <button onClick={()=>dispatch({type:'decrease'})}>decrease</button>
        <button onClick={()=>dispatch({type:'increase2'})}>increase2</button>
        <button onClick={()=>dispatch({type:'decrease2'})}>decrease2</button>
        <button onClick={()=>dispatch({type:'multiply'})}>multiple2</button>

    </div>
  )
}






// import React, { useReducer } from 'react'
// import { Link } from 'react-router-dom';

// function Usereduce() {


//     const Initial = 0;
//     const reducer = (state,action)=>{
//         console.log('action',action)
//         switch(action.type){
//             case 'increase':
//                 return state=state+1
//             case 'decrease':
//                 return state=state-1 
//             case 'increase2':
//                 return state=state+2
//             case 'decrease2':
//                 return state=state-2
//             case 'multiple':
//                 return state=state*2
//                 default:
//             return state
            
//         } 
//     }
//     const[state,dispatch]=useReducer(reducer,Initial)

//   return (
//     <div>
//         <Link to={'mysecond'}><p>hellow</p></Link>

//         <h1>{state}</h1>
//         <button onClick={()=>dispatch({type:'increase'})}>increase</button>
//         <button onClick={()=>dispatch({type:'decrease'})}>dcrease</button>
//         <button onClick={()=>dispatch({type:'increase2'})}>increase2</button>
//         <button onClick={()=>dispatch({type:'decrese2'})}>decrease2</button>
//         <button onClick={()=>dispatch({type:'multiple'})}>multiple2</button>

//     </div>
//   )
// }

// export default Usereduce