import React, { useState } from 'react'
import './App.css';

function Change() {
     //  Define state variables for content and width
//   const [content, setContent] = useState("HI! heloo there u can see a chane when clicking the button");
     const[content,setstate] = useState("");
//   const [width, setWidth] = useState(200); // Initial width in pixels
     const[widthh,setWidth] = useState('');

  // Create a function to update content and width
  const changeContentAndWidth = () => {
    setstate("hi im kashyap wed site developer based in india responsible for the change"); // Update the content
    setWidth(1000); // Increase the width by 50 pixels
  };

  const reset = () =>{
    setWidth(10);
    setstate("reset")
  }
  return (
  <div>
    <div id='head'
    style={{
     
      width: `${widthh}px`,
      border: '1px solid #000',
      padding: '10px',
      

    }}
  >
        {/* Step 4: Render the content from the state variable */}
        <h1>{content}</h1>
        <h2>{content}</h2>
    </div>
  <button onClick={changeContentAndWidth}>Click</button>
  <button onClick={reset}>reset</button>
</div>
);
}

export default Change



