import { createSlice } from "@reduxjs/toolkit";


const me = createSlice({
    name:'me',
    initialState:{
        // value store in the userinfo by the state.userinfo.push(action.payload) this
        userinfo:[],

    },
    reducers:{
        start:(state,action)=>{
            console.log('********************************',action);
            state.userinfo.push(action.payload)
        },

    }
})

export const {start}=me.actions
export default me.reducer