import React from 'react'

function Destructuring() {
// array destructuring
    const numbers =[14,78,'abc',87,124];
    const [a,b,c,d]= numbers;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);


// object destructure

// const person={
//     name:'kashyap',
//     domain:"develepor",
//     age:"20",
//     address:{
//         district:'kozhikode',
//     }
// };
// // const {name,domain,age,address:{state}} = person
// console.log(person.name);
// console.log(person.domain);
// console.log(person.age);
// console.log(person.address.district);

// //spread
// const g ={a:1,b:2,c:3}
// const h ={d:4,e:5,f:6}
// const i=({...h,...g})
// console.log(i);




  return (
    <div>Destructuring</div>
  )
}

export default Destructuring