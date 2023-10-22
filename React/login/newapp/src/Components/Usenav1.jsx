import React from 'react'
import { useNavigate } from 'react-router-dom'

const Usenav1 = () => {
    const nav=useNavigate()
    const display=()=>{
        nav('/')
    }

    
  return (
    <div>Usenav1
        <button onClick={display}>clikooo</button>
    </div>
  )
}

export default Usenav1


// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// // dout not working 
// const Usenavigate1 = () => {
// const navigate=useNavigate()

//     const display=()=>{
//         navigate('/')
//     }

//   return (
//     <div>Usenavigate1
//         <button onclick={display}>clickmee</button>
//     </div>
//   )
// }

// export default Usenavigate1