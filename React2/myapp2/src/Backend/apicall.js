import axios from 'axios'
export const signupdata=async(datas)=>{
    console.log('firstdata ',datas);

    try{
        const res=await axios.post('http://localhost:3000/api/postmethod',datas)
        console.log('finaldata ',res);

    }catch(err){
        console.log(err);
    }
}