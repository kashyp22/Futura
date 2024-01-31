import React from 'react'
import Props from './Props'

function Welcome(props1) {
    return <h1>hi im kashyap, {props1.name}</h1>;

}


function Welcome1(props) {
    return <h1>hellow,{props.name}</h1>
 }

function  Propseg() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
      <Welcome1 name = "kashyap"/>

      {/* <Props/> */}
    </div>
    
  )
}

export default Propseg