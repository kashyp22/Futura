import { createSlice } from "@reduxjs/toolkit";


const user1 = createSlice({
    name:'userss',
    initialState:{
        userValue1:[]
    },
    reducers:{
        userDetails1:(state,action)=>{

            console.log('userdetails action',action);
            state.userValue1.push(action.payload)
        },
        logoutact:(state)=>{state.userValue1=[]}

    }
})

export const {userDetails1,logoutact}=user1.actions
export default user1.reducer