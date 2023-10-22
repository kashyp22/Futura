import { useEffect,useReducer } from "react";
import { createContext } from "react";

const INITIAL_state={
    // User:null,
    User:JSON.parse(localStorage.getItem('User')) || null,
} 

export const Usercontext=createContext(INITIAL_state)

const UserReducer=(state,action)=>{
    console.log('action paylod',action.payload,'action type',action.type);

    switch (action.type){
        case 'Loginstart':
            return{User:action.payload}
        case 'Remove':
            return{User:null}            

        default:
            return state
    }
}

    export const Contextprovider=({children})=>{
        const [state,dispatch]=useReducer(UserReducer,INITIAL_state)

        useEffect(()=>{
            localStorage.setItem('User',JSON.stringify(state.User))
            },[state.User]
        )
    

return(
    
<Usercontext.Provider value={{ User:state.User,dispatch}}>
            {children}
</Usercontext.Provider>


)
}

    