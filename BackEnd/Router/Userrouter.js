// database access is done here Userrouter

    const router=require('express').Router() //create a variable and import express

    const AAbatch=require('../Models/Userschema') //import users from usersschema

    const Crypto=require('crypto-js')
// connect front to backend 


// *****************POST METHOD
    router.post('/postmethod',async(req,res)=>{  // router.post -value can be take frontend to backend  /postmethod-just a name for api, its userdefind

    // req.body have the forntend data backend
    console.log('postman data?',req.body); // req.body-data can be taken to frontend  ,it contains the data send in the post request by clients
    // const newUser=new AAbatch(req.body)  // all data is fetch to the database through the req.body

    const newUser=new AAbatch({
        username:req.body.username,
        password:Crypto.AES.encrypt(req.body.password,process.env.Crypto_js).toString(),
        email:req.body.email
    })

    try{
        const saveduser=await newUser.save() //savedUser must be used ..before save the new user documents to database
        res.status(200).json(saveduser)
        // 200
    }catch(err){
        res.status(500).json(err)
        // 500
    }
})

// ***********Login form post
    router.post('/loginform', async (req,res)=>{

        try{
           const DB = await AAbatch.findOne({email:req.body.email})  // 
           !DB && res.status.apply(401).json({response:"please check your email"})
           console.log('backend data',DB);
           const hashedPassword = Crypto.AES.decrypt(DB.password,process.env.Crypto_js)
           console.log('hashed password',hashedPassword);
           const originalPassword = hashedPassword.toString(Crypto.enc.Utf8)  // to change buffercode 
           console.log('original password is ', originalPassword);
           originalPassword != req.body.password && res.status(404).json({response:"password and email doesn't match"})
           res.status(200).json("Sucess")

        }catch(err){
            res.status(400)

        }
    })


// ****************GET METHOD 
    router.get('/getmethod', async(req,res)=>{
            console.log(req.params);
        try{
             const backenddata=await AAbatch.find()   // here find() is used to get all data in the database
            // const backenddata=await AAbatch.findById(req.params);
            console.log(backenddata);
            res.status(200).json(backenddata)
        }catch(err){
            res.status(500).json(err)

        }
    })

// UPDATE *******BY .PUT 

    router.put('/updatedata/:id', async(req,res)=>{
        console.log(req.params.id);
        try{
            const resdata=await AAbatch.findByIdAndUpdate(req.params.id,{
                
                $set:req.body
            },{new:true})
            res.status(200).json(resdata)
        }catch(err){
            res.status(500).json(err)

        }
    })


module.exports=router