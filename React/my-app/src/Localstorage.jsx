
import React from 'react'

const Localstorage = () => {
    localStorage.setItem('student','kashyap')

    const a=localStorage.getItem('student')
    console.log('***',a)

    sessionStorage.setItem('student','abinav')
    

  return (
    <div>Localstorage</div>
  )
}

export default Localstorage
