import axios from "axios";
import { userDetails1 } from "../redux/Useredux";
// import localStorage from "redux-persist/es/storage";
import { userRequest } from "./Request";

export const registerdata= async(regdata)=>{
    console.log('regfirst data',regdata);
    try{
        const regdatapost=await userRequest.post(`/postmethod`,regdata)

        console.log('regafterpost data',regdatapost);

    }catch(errorr){
        console.log(errorr);
    }

}

export const logindata=async(dispatch,logindat)=>{

    console.log('logindatafirst',logindat);
    try{
        const logindatas=await axios.post('http://localhost:5000/api/loginform',logindat);
        // console.log('logindatafterpost',logindatas);
        dispatch(userDetails1(logindatas.data))

    }catch(err){
        console.log(err);
    }
}


        

export const profiledata=async(pdata)=>{

    try{
        const data= await userRequest.get(`/getdataverifytoken/${pdata}/`)
        console.log('pdata',pdata);
        console.log('data in profiledata',data);
        return data

    }catch(err){
        console.log(err);

    }
    
}


// export const profiledata=async(pdata)=>{
//     console.log('pdata123',pdata);

//     try{
//         const data= await axios.get(`http://localhost:5000/api/getdataverifytoken/${pdata}/`)
//         console.log('pdata',pdata);
//         console.log('data in profiledata',data);
//         return data

//     }catch(err){
//         console.log(err);

//     }
    
// }









// export const updateData=async(updata)=>{
//     console.log('updata',updata);

//     try{
//         const data= await axios.put(`http://localhost:3001/api/updatedatainfrontend/${updata}`,{
//             username: updata.userName,
//             email: updata.Email,
//         } )
//         console.log('data in profiledata',data);
//         return data

//     }catch(err){
//         console.log(err);

//     };
    
// }

export const updateData = async (updata) => {
    try {
      const data = await axios.put(`http://localhost:5000/api/updatedata/${updata.id}`, {
        username: updata.userName,
        email: updata.Email,
        // other fields if needed
      });
      console.log('data in profiledata', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
// export const forgotData = async (fordata) => {
//     try {
//       const data = await axios.put(`http://localhost:7000/api//${updata.id}`, {
//         username: updata.userName,
//         email: updata.Email,
//         // other fields if needed
//       });
//       console.log('data in profiledata', data);
//       return data;
//     } catch (err) {
//       console.log(err);
//     }
//   };


