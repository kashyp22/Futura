// index file responsible for connection all
// step:1
        const express=require('express')
        const app=express()
//step:2 
        const dotenv=require('dotenv')
        const mongoose=require('mongoose')
        dotenv.config()
mongoose.connect(process.env.Mongo_url).then(()=>{
    console.log('data base is connected');
})


// ********** step:1 backend server is created*********
        app.listen(3000,()=>{
            console.log('server is connected');
        })