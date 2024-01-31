// import React, { useState } from 'react'
// import './Welcome.css'

// const Welcome =() =>{
//     const [state,setstate]=useState('')
//     const[abs,setabs]=useState(null)

//     const clikk=()=>{
//         console.log('state',state);
//         setabs(state)
//         console.log('abs',abs);
//     }

// return(
//     <div className='welcome1'>
//         <div>
//             <h1>Welcome to the Login page</h1>

//             <input type="text" onChange={(e)=>setstate(e.target.value)}/>
//             <input type="text" />
//             <button onClick={clikk}>sumbit</button>
//             <h1>{abs &&  abs }</h1>
            

//         </div>
//     </div>

// )
// }
// export default Welcome


import React  from 'react';
import './Welcome.css';

const Welcome = () => {
  // const [state, setstate] = useState('');
  // const [elements, setElements] = useState([]);

  // const [state1,setState1]=useState('');
  // const[elements1,setElements1] = useState([])




  // const clikk = () => {
  //   console.log('state', state);
  //   setElements((prevElements) => [...prevElements, state]);
  //   setstate(''); // Clear the input field after adding the element

  //   console.log('state1',state1);
  //   setElements1((returnelements) => [...returnelements,state1])
  // };

  return (
    <div className='welcome1'>
      <div>
        <h1>Welcome to the Login page</h1>

        
       
        </div>

    {/* <div className='home'> */}
         {/* Render the added elements */}


         {/* <table border="2">

          <tr>

        <th> <input type="text" value={state} onChange={(e) => setstate(e.target.value)} /> </th>
        <input type="text" onChange={(e) => setState1(e.target.value)}/>
        <button onClick={clikk}>submit</button>

        </tr>

          <tr>
              <th>movie</th>

              <th>director</th>
              
         </tr>
          
  
  

        <tr>
       
        <td>  {elements.map((element, index) => (
            <td key={index}>{element}</td>
          ))}
        </td>
  
         <td>   {elements1.map((elements) =>(
                <li>{elements}</li>
            ))}
          </td>
          
        </tr>

          </table> */}

          

     
          
      </div>
    
  );
};

export default Welcome;


