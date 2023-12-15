import axios from 'axios'
import { userDetails } from '../Redux/Useredux';
import {  userRequest } from './requestmethod';
export const signupdata=async(datas)=>{
    console.log('firstdata ',datas);
    try{
        const res=await axios.post('http://localhost:3000/api/postmethod',datas)
        // const res= await publicRequest.post('/postmethod',datas)

        console.log('finaldata ',res);

    }catch(err){
        console.log(err);
    }
}


    export const Loginapi=async (dispatch,data)=>{
        console.log('loginapi',data);
        try{
            const res=await axios.post('http://localhost:3000/api/loginform',data)
        // const res= await publicRequest.post('/loginform',data)

            dispatch(userDetails(res.data))

        }catch(err){
            console.log(err);
        }
    }

    export const profiledetails = async(params)=>{
        console.log('parameter of profiledetails id in api call',params);
        try{
            const res2=await userRequest.get(`/getdataverifytoken/${params}`)
            console.log('apicall final result res2', res2);
            return res2

        }catch(err){
            console.log(err);
        }
        
    }
//    export const update = async(params)=>{
//     console.log('update',params);
//     try{
//         const res5=await axios.put(`http://localhost:3000/api/updatedata/${params}`)
//         console.log('update dta res5',res5);
//     }catch(err){
//         console.log(err);

//     }
//    }
