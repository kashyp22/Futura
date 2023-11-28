import axios from 'axios'
import { userDetails } from '../Redux/Useredux';
import { publicRequest } from './requestmethod';
export const signupdata=async(datas)=>{
    console.log('firstdata ',datas);
    try{
        // const res=await axios.post('http://localhost:3000/api/postmethod',datas)
        const res= await publicRequest.post('/postmethod',datas)

        console.log('finaldata ',res);

    }catch(err){
        console.log(err);
    }
}


    export const Loginapi=async (dispatch,data)=>{
        console.log('loginapi',data);
        try{
            const res=await axios.post('http://localhost:3000/api/loginform',data)
            dispatch(userDetails(res.data))

        }catch(err){
            console.log();
        }
    }

   