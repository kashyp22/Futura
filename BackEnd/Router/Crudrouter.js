// This js file is another Userrouter   
// ********helps to complex authetication 

const router=require('express').Router()
const AAbatch=require('../Models/Userschema')

router.delete('/delete/:id', async(req,res)=>{
    try{

        // here we didn't assingn to a const because delete is doing
        await AAbatch.findByIdAndDelete(req.params.id)
        res.status(200).json('file deleted')
    }catch(err){
        res.status(500).json(err)

    }
})
module.exports=router


