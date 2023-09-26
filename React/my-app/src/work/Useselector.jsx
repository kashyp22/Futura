import React from 'react'
import { useSelector } from 'react-redux';

const Useselector = () => {
    const data=useSelector((stat)=>stat.me.userinfo)
    console.log('123456',data);
  return (
    <div>Useselector</div>
  )
}

export default Useselector