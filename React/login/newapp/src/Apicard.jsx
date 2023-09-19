import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Apicard() {
    const [state,setstate]=useState([])
    useEffect(()=>
    {
        try{
        async function text(){
            // apifecth is done here
            const api=await axios.get('https://jsonplaceholder.typicode.com/users')
            setstate(api.data)
        }
        
        text()}
        catch{
            console.log('error');
        }
    },[])

    console.log('***state',state)




  return (
    
    <div id='card'>

        <div id='card1'>
        <table border={2}>
            {/* table  */}
                 <tr>
                    <th>Name</th>
                    <th>Username</th>
                </tr> 
        {state.map((li)=>(
            <>
            {/* <tr>
                    <th>Name</th>
                    <th>Username</th>
                </tr>  */}
            <tr>
                <td>{li.name}</td>
                <td>{li.username}</td>
            </tr>
            </>
        )
        )}
               
        </table>
        </div>
        
    </div>
  )
}

export default Apicard


