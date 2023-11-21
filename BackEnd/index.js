
// date: 02-11-20323
// index file responsible for connection all
// step:1
        const express=require('express')//This line imports the Express.js library, allowing you to create and configure a web application using Express.
        const app=express()//This line creates an instance of the Express application, which is used to define routes, middleware, and handle HTTP requests and responses.
//step:2 
        const dotenv=require('dotenv')//This line imports the dotenv library, which is used for loading environment variables
        const mongoose=require('mongoose')
        dotenv.config() //This line invokes the config() method provided by the dotenv library, which loads the environment variables defined in a .env file into process.env
        const cors=require('cors')
        app.use(cors())

// step:3 export from the userrouter.js file to 
        const userrouter=require('./Router/Userrouter') //This line invokes the config() method provided by the dotenv library, which loads the environment variables defined in a .env file into process.env

        //  delete and new userrouter page credrouter is created
        const credroute=require('./Router/Crudrouter')
// step:2

//mongoose is the Mongoose library, which is an Object Data Modeling (ODM) library for MongoDB and Node.js.
//mongoose.connect() is a method provided by Mongoose to establish a connection to a MongoDB database.  .then=> This part of the code is using a Promise-based approach to handle the asynchronous nature of the mongoose.connect() method
mongoose.connect(process.env.Mongo_url).then(()=>{  

        console.log('data base is connected');
})
// step:3.1 converting frontend data to jaison and convert to backend

app.use(express.json())

app.use('/api',userrouter)
// ****delete is done here also
app.use('/del',credroute)


// ********** step:1 backend server is created*********
// .listen(3000, ...) is a method used to start a web server and make it listen for incoming connections on a specific port. In this case, it's listening on port 3000.
        app.listen(3000,()=>{
            console.log('server is connected');
        })

        //http://localhost:3000/api/postmethod