import React from 'react'
import { useDispatch } from 'react-redux'
import { removedata } from '../Redux/Useredux'

const Homepage = () => {
    const dispatch=useDispatch()
function deletedata(){
    dispatch(removedata())
}

  return (
    <div>
        <h1>homepage</h1>
        <button onClick={deletedata}>logout</button>
    </div>
  )
}

export default Homepage