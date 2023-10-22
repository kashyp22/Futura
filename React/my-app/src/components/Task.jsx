// import React, { useRef } from 'react'

// function Task(){

//     const button=useRef()
//     function task1(){
//         button.current.style.backgroundColor="black"
//     }
//     const button1=useRef()
//     function task2(){
//         button1.current.style.backgroundColor="green"
//     }

// if (onclick={task1}){
//  console.log("hooooi")
    
// }


//   return (
//     <div  >

//         <div ref={button}>
//             <h1>hellow</h1>
//             <button onClick={task1}>click</button>
//         </div>

//         <div ref={button1}>
//             <h1>hellow</h1>
//             <button onClick={task2}>click</button>
//         </div>
//         <div ref={button1}>
//             <h1>hellow</h1>
//             <button onClick={task2}>click</button>
//         </div>

//         <div ref={button}>
//             <h1>hellow</h1>
//             <button onClick={task1}>click</button>
//         </div>




//     </div>
//   )
// }

// export default Task







// import React, { useRef } from 'react';

// function Task() {
//   const button1 = useRef();
//   const button2 = useRef();
//   const button3 = useRef();
//   const button4 = useRef();


//   function task1() {
//     if (button1.current) {
//       button1.current.style.backgroundColor = 'red';
//       button2.current.style.backgroundColor = 'black';
//       button3.current.style.backgroundColor = 'black';
//       button4.current.style.backgroundColor = 'black';

      
//     }
//   }

//   function task2() {
//     if (button2.current) {
//       button2.current.style.backgroundColor = 'red';
//       button1.current.style.backgroundColor = 'black';
//       button3.current.style.backgroundColor = 'black';
//       button4.current.style.backgroundColor = 'black';

//     }
    
//   }
//   function task3() {
//     if (button2.current) {
//       button2.current.style.backgroundColor = 'black';
//       button1.current.style.backgroundColor = 'black';
//       button3.current.style.backgroundColor = 'red';
//       button4.current.style.backgroundColor = 'black';

//     }
    
//   }
//   function task4() {
//     if (button2.current) {
//       button2.current.style.backgroundColor = 'black';
//       button1.current.style.backgroundColor = 'black';
//       button3.current.style.backgroundColor = 'black';
//       button4.current.style.backgroundColor = 'red';

//     }
    
//   }

//   <style>

//   </style>


//   return (
//     <div style={{backgroundColor:"black"}}>
//       <div ref={button1} >
//         <h1>Hello</h1>
//         <button onClick={task1}>Click</button>
//       </div>
//       <div ref={button2}>
//         <h1>Hello</h1>
//         <button onClick={task2}>Click</button>
//       </div>
//       <div ref={button3}>
//         <h1>Hello</h1>
//         <button onClick={task3}>Click</button>
//       </div>
//       <div ref={button4}>
//         <h1>Hello</h1>
//         <button onClick={task4}>Click</button>
//       </div>
//     </div>
//   );
// }

// export default Task;

import React, {useRef} from 'react';

function Task() {
  const button1 = useRef();
  const button2 = useRef();
  const button3 = useRef();
  const button4 = useRef();
  
  function task1() {
    if (button1.current) {
      button1.current.style.backgroundColor = 'red';
      button2.current.style.backgroundColor = 'BLACK';
      button3.current.style.backgroundColor = 'black';
      button4.current.style.backgroundColor = 'yellow';      
    }
  }

  function task2() {
    if (button2.current) {
      button2.current.style.color = 'red';
      button1.current.style.backgroundColor = 'black';
      button3.current.style.backgroundColor = 'black';
      button4.current.style.backgroundColor = 'black';
    }    
  }
  function task3() {
    if (button2.current) {
      
      button2.current.style.color = 'red';
      
      button2.current.style.backgroundColor = 'black';
      button1.current.style.backgroundColor = 'black';
      button3.current.style.backgroundColor = 'red';
      button4.current.style.backgroundColor = 'black';
    }   
  }
  function task4() {
    if (button2.current) {
      button2.current.style.backgroundColor = 'black';
      button1.current.style.backgroundColor = 'black';
      button3.current.style.backgroundColor = 'black';
      button4.current.text = 'red';
    }   
  }
  return (
    <div style={{backgroundColor:""}}>
      <div ref={button1} >
        <h1>Hello</h1>
        <button onClick={task1}>Click</button>
      </div>
      <div ref={button2}>
        <h1>Hello</h1>
        <button onClick={task2}>Click</button>
      </div>
      <div ref={button3}>
        <h1>Hello</h1>
        <button onClick={task3}>Click</button>
      </div>
      <div ref={button4}>
        <h1>Hello kashyap </h1>
        <button onClick={task4}>Click</button>
      </div>
    </div>
  );
}
export default Task;

