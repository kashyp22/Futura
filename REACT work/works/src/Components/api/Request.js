import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";

// // var local=(localStorage.setItem(('persist:hello')).userss).userValue1[0]


var Token = JSON.parse(JSON.parse(localStorage.getItem('persist:hello')).userss).userValue1[0] &&
        JSON.parse(JSON.parse(localStorage.getItem('persist:hello')).userss).userValue1[0].accesstoken

            console.log('tokennnnnnn kodukunnu',Token);

            export const userRequest = axios.create({
                baseURL:BASE_URL,
                headers:{token : `Bearer ${Token}`}
            })

            