import React from 'react'
const Usecallback2 = (props) => {
    console.log('child rendered');
  return (
    <div>
          <h1>{props.state}</h1>
    </div>
  )
}
// export default Usecallback2
export const Hello = React.memo(Usecallback2)