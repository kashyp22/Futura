import React from 'react'

function Destructuring() {
// array destructuring
    // const numbers =[14,78,'abc',87,124];
    // const [a,b,c,d]= numbers;
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);


// object destructure

// const person={
//     name:'kashyap',
//     domain:"develepor",
//     age:"20",
//     address:{
//         state:'kozhikode',
//     }
// };
// const {name,domain,age,address:{state}} =person
// console.log(name);
// console.log(domain);
// console.log(age);
// console.log(state);

// //spread
const g ={a:1,b:2,c:3}
const h ={d:2,e:2,f:3}
const i=({...h,...g})
console.log(i);




  return (
    <div>Destructuring</div>
  )
}

export default Destructuring