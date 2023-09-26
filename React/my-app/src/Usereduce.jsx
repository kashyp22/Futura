import React, { useReducer } from 'react'
import { Link } from 'react-router-dom';
import Superchild from './Superchild';

function Usereduce() {



    const Initial = 0;
    const reducer = (state,action)=>{
        console.log('action',action)
        switch(action.type1){
            case 'increase':
                return state=state+1
            case 'decrease':
                return state>0 ? state-1 :state
            case 'increase2':
                return state=state+2
            case 'decrease2':
                return state=state-2
            case 'multiple':
                return state=state*2
            case 'reset':
                return  Initial
                default:
            
            return state
            
        } 
    }
    const[state,dispatch]=useReducer(reducer,Initial)

  return (
    <div >
        <h1>hellow
        </h1>


        <Link to={'mysecond'}><p>hellow</p></Link>

        <h1>{state}</h1>
        <button onClick={()=>dispatch({type1:'increase'})}>increase</button>
        <button onClick={()=>dispatch({type1:'decrease'})}>dcrease</button>
        <button onClick={()=>dispatch({type1:'increase2'})}>increase2</button>
        <button onClick={()=>dispatch({type1:'decrease2'})}>decrease2</button>
        <button onClick={()=>dispatch({type1:'multiple'})}>multiple2</button>
        <button onClick={()=>dispatch({type1:'reset'})}>reset</button>

        <Superchild value={state}/>
    </div>
  )
}

export default Usereduce