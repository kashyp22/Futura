import { createSlice } from "@reduxjs/toolkit";


const user = createSlice({
    name:'users',
    initialState:{
        userValue:[]
    },
    reducers:{
        userDetails:(state,action)=>{
            console.log("*****",action);
            state.userValue.push(action.payload)
        
    },

    removedata:(state)=>{state.userValue=[]}
    }
})
export const {userDetails,removedata}=user.actions
export default user.reducer