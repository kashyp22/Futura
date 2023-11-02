// import React, { useEffect, useRef } from 'react'


// function Useref2() {
//    const sample1 = useRef()
//    const sample2 = useRef()
//    const Input1 =useRef()

//     function show(){
//         sample1.current.style.backgroundColor="green";
//         sample2.current.style.color='white';
//         sample2.current.innerHTML='<h1>india</h1>';
//     }

//         useEffect ( ()=>
//         Input1.current.focus()
//         )

    

//   return (
//     <div ref={sample1}>
//         <h1 ref={sample2}>hellow</h1>

//         <button onClick={show}>Click</button>
//         <input type="text" placeholder='Name' ref={Input1} />
//         <input type="text" placeholder='age' />
//         <input type="text" placeholder='Place' />
//     </div>
//   )
// }

// export default Useref2

// import React, { useState } from 'react';

// function InputComponent() {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         // onClick={handleInputChange}
//       />
//       <button onClick={handleInputChange} > type</button>
//       <p>You typed: {inputValue}</p>
//     </div>
//   );
// }

// export default InputComponent;


// import React, { useState } from 'react';

// function InputComponent() {
//   const [inputValue, setInputValue] = useState('');
//   const [outputValue, setOutputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleButtonClick = () => {
//     // Get the input value and do something with it
//     setOutputValue(inputValue);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleButtonClick}>Get Input Value</button>
//       <p>You typed: {inputValue}</p>
//       <p>Output value: {outputValue}</p>
//     </div>
//   );
// }

// export default InputComponent;


// import React, { useState } from 'react';

// function InputComponent() {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = () => {
//     // Here, you can manually set the input value to something
//     setInputValue == inputValue;
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//       />
//       <button onClick={handleInputChange}>Set New Value</button>
//       <p>You typed: {inputValue}</p>
//     </div>
//   );
// }

// export default InputComponent;
