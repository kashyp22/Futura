import axios from "axios";
// import { json } from "react-router-dom";
const BASE_URL = "http://localhost:7000/api/";


   var Token=JSON.parse ( JSON.parse(localStorage.getItem('persist:kashyb')).users).userValue[0] &&
   JSON.parse(JSON.parse(localStorage.getItem('persist:kashyb')).users).userValue[0].accesstoken

//  var Token = JSON.parse(JSON.parse(localStorage.getItem('persist:kashyb')).users123).userValue[0] &&
//  JSON.parse(JSON.parse(localStorage.getItem('persist:kashyb')).users123).userValue[0].accesstoken

// var Token = json.parse ( JSON.parse(localStorage.getItem('persist:roots')).users).userValue[0]

     console.log('finalyyy  tokennn',Token);
 

        export const publicRequest = axios.create({
            baseURL: BASE_URL
        })

        export const userRequest = axios.create({
            baseURL:BASE_URL,
            headers:{token : `Bearer ${Token}`}
        })


