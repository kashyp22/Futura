// data configure is done here

const mongoose=require('mongoose')
 // create a new variable Userschemas,schema describe the structure of documents
const Userschema=new mongoose.Schema({
    // username:{type:String,require:true} //require:true is user to make this field compulsory
    username:{type:String},
    email:{type:String},
    password:{type:String},
    Images:{type:String},

},{timelaps:true})  //to add the data and time the value is added/edited in database

module.exports=mongoose.model("AAbatch",Userschema)  //here 'users' is the name of the collection you are creating

