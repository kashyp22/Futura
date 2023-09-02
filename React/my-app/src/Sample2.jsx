import React, { useContext } from 'react'
import { Appcontext } from './Context'

function Sample2() {
  const value = useContext(Appcontext)
  return (
    <div>
        <h1>{value}</h1>
    </div>
  )
}

export default Sample2