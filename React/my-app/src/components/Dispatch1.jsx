import React, { useContext, useEffect, useState } from 'react'
import { Usercontext } from '../Context/Context1'
import { type } from '@testing-library/user-event/dist/type'
import axios from 'axios'

const Dispatch1 = () => {

    const [state,setstate]=useState()
    const {dispatch}=useContext(Usercontext)
// api atomatically calling in useffect display the api data 
    useEffect(()=>{
        async function display(){
            const res=await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(res.data);
            setstate(res.data)
            dispatch({type:'Loginstart',payload:(res.data)})


        }
        display()

        // Empty array [] is used to initially load it or when refresh
    },[])
    console.log('state data',state);

const deletedata=()=>{
  dispatch({type:'Remove'})
}
const refresh=async()=>{
  const res=await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(res.data);
            setstate(res.data)
            dispatch({type:'Loginstart',payload:(res.data)})

}

  return (
    <div>Dispatch1

      <button onClick={deletedata}>click to null the localstorage</button>
      <button onClick={refresh}>click to  the localstorage</button>

    </div>
  )
}

export default Dispatch1