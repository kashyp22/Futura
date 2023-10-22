import React from 'react'

function Propsdrill(props) {
  return (
    <div>
{props.value.map((li)=>(
    <>
    <h1>
        {li.name}       
    </h1>

    
    <h3>{li.username}</h3>
    </> 
))}
    </div>
  )
}

export default Propsdrill


// import React from 'react'

// export const Propsdrill = (props) => {

// console.log('***',props.value);

//   return (
//     <div>
//         {props.value.map((li)=>(
//             <h1>{li.name}</h1>
//         ))}
//     </div>
//   )
// }