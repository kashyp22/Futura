import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { removedata } from '../Redux/Useredux'

const Useref1 = () => {

  // remove data dispatch from Useredux
  const dispatch=useDispatch()


  // remove data
   
  function logout(){
    dispatch(removedata())
   
  }


    //  useref
    const kshyap=useRef()
    
//**********************change function is goes here**********************/   
    const click2=(()=>{
        kshyap.current.innerText='initial change is here' 
        kshyap.current.style.backgroundColor="white";


     })

    const click=(()=>{
        // kshyap.current.style.width="500px";
        kshyap.current.innerText='text is change here';
        // kelo.current.style.color="black";
        kshyap.current.style.backgroundColor="green";

    })



  return (
    <div >

        <h1>2; UseRef</h1>
        <p> Useref is used to change dom elements directly</p>


        <h2 ref={kshyap}>initial change is here</h2>
        {/* <h2 ref={kelo}>  he</h2> */}

    <button onClick={click}> click</button>
    <button onClick={click2}>reset</button>


    <h1> logout<button onClick={logout}>logout</button></h1>

    </div>
  )
}

export default Useref1



// import React, { useRef } from 'react';

// function TextInput() {
//   const inputRef = useRef(null); // create a ref

//   function handleChangeText() {
//     inputRef.current.value = 'Hello World'; // change the input value
//   }

//   return (
//     <div>
//       <input  ref={inputRef} type="text"/> 
//       <h1 ref={inputRef} type="text"></h1>
//       <button onClick={handleChangeText}>Change Text</button>
//     </div>
//   );
// }
// export default TextInput