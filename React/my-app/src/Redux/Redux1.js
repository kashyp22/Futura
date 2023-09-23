import { createSlice } from "@reduxjs/toolkit";


const me = createSlice({
    name:'me',
    initialState:{
        userinfo:[],

    },
    reducers:{
        start:(state,action)=>{
            state.userinfo.push(action.payload)
        }
    }
})

export const {start}=me.actions
export default me.reducer