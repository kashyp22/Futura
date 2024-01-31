import React from 'react'
import './Style.css'
// import Root from './Root/Root';

const First = (props) => {
    const {state1}=props;
  return (
    <div className='one'>
<h1>hello</h1>
        <div className='two'>
            {/* <h5>hellow:{state1}</h5> */}
            <h1>hello: {parseInt(state1)}</h1>

        </div>
    </div>
  )
}

export default First