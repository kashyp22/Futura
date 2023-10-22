import React, { useState } from 'react'


const Usestate1 = () => {
 var [state,setstate]=useState(5)

 var [kashyap,changekash]=useState(100)

 function display(){
   changekash(kashyap+1)
 };
 function display2(){
   changekash(0)
}
function display23(){
   changekash(kashyap>0 ? kashyap-1 : kashyap) 
}
function display0(){
    
   changekash( kashyap-1)
}

 

 const click1=(()=>{
    setstate (state+1);
 })
 const click2=(()=>{
    setstate (0)
 })
  return (
    <div> 
        <h1> 1; UseState</h1>
        <p> usestate is used to change a particular state it has state setstate and useState(0) 'initial state'</p>
        <h1>{state}</h1>
        <button onClick={click1}>+</button>
        <button onClick={click2}>reset</button>

        <div>

            <h2> dispaly {kashyap}</h2>

            <button onClick={display}>display ++ </button>
            <button onClick={display2}> display reset </button>
            <button onClick={display23}> only -- </button>
            <button onClick={display0}>-0</button>
         </div>
    </div>
  )
}

export default Usestate1