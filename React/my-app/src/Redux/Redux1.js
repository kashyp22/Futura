import { createSlice } from "@reduxjs/toolkit";


const store = createSlice({
    name:'store',
    initialState:{
        // value store in the userinfo by the state.userinfo.push(action.payload) this
        userinfo:[],

        

    },
    
    reducers:{
        start:(state,action)=>{
            console.log('********************************',action);
            state.userinfo.push(action.payload)
        },
        removeData:(state)=>{
            state.userinfo=[]
        }

    }
})

export const {start,removeData}=store.actions
export default store.reducer