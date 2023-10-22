// import React, {useState} from 'react'

// function Inputget() {


//     const [name,setName]=useState()
    // const [place,setplace]=useState()
    // const [email,setEmail]=useState()
    // const [tel,setTel]=useState()

    // const values = useRef()


    // const display = (e)=>{

        // e.preventDefault();
        // const a = values.current.value;
        // console.log(a);
        // console.log(place);
        // console.log(email);
        // console.log(tel);
        // console.log(name);
    // }


      // return (
    // <div>
        // <form onSubmit={display}>
        // <input type="text" placeholder='Name' value={name} onChange={(n)=>setName(n.target.value)}/>
        // {/* <input type="text" placeholder='Place' value={place} onChange={(p)=>setplace(p.target.value)} required/> */}
        // {/* <input type="text" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} /> */}
        // {/* <input type="text" placeholder='tel' value={tel} onChange={(t)=>setTel(t.target.value)} /> */}
        // {/* <button onClick={display}>submit</button> */}
        // {/* <input type="text" placeholder='name' ref={values} /> */}
        // <input type="submit"/>
        // </form>
    // </div>
  // )
// }

// export default Inputget


import React, { useState } from 'react'

const Form = () => {

    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [mobile,setMobile]=useState()

    const display=(e)=>{
        e.preventDefault();  
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(mobile);

    }

  return (
    <div>
        <form onSubmit={display}>
        <input type='name' placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input type="mobile" placeholder='mobile'value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
        {/* <button onClick={display}>Submit</button> */}
         <input type="submit" />
         </form>

     </div>
     )
   }

 export default Form