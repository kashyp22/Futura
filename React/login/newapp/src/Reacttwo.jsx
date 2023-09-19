import React from 'react'

function Reacttwo(props) {
console.log('Child renderd');


  return (
    <div>
        <h2>React two:state :{props.value}</h2>
    </div>
  )
}

export default Reacttwo


// import React from 'react'

// const NewReact = (props) => {
//     console.log('child rendered');
//   return (
//     <div><h1>{props.state}</h1></div>
//   )
// }

// export default NewReact
// export const Hello = React.memo(NewReact)