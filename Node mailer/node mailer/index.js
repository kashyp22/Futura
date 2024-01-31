const express1=require('express')
const app1=express1()
const mongoose=require('mongoose')
const cors=require('cors')
const dotenv=require('dotenv')
const appRoute =  require('./routes/Approuter')

dotenv.config()
app1.use(cors())
mongoose.connect(process.env.Mongo_url).then((data)=>{
    console.log('database connected');
})

app1.use(express1.json())

app1.use('/api1',appRoute)

app1.listen('3000',()=>{
    console.log('port 3000 connected');
})