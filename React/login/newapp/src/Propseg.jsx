import React from 'react'

function Welcome(props) {
    return <h1>hi im kashyap, {props.name}</h1>;

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
    </div>
    
  )
}

export default Propseg