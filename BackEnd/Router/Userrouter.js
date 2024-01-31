// database access is done here Userrouter

    const router=require('express').Router() //create a variable and import express

    const AAbatch=require('../Models/Userschema') //import users from usersschema
// crypto-js is used to encrypt and decrypt particular password or anything
    const Crypto=require('crypto-js')

    const jwt = require('jsonwebtoken')

    const {verifyToken} = require('../Verifytoken')
    const { verifyTokenAndauthorization } = require('../Verifytoken')

// multer is used to save image and save the image in the publid image folder  
     //  multer
    const multer = require('multer')
// const { response } = require('express')
// connect front to backend 

//  multer 
// const a='../../../Desktop/extra works/REACT work/works/public/Images'
 
const storage=multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'../REACT work/works/public/Images')
        console.log('reqqqqqqqqqqqqqqqqqqqqq1234455',req);
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload=multer({storage:storage});

// router.post('/',upload.single('Images'),(req,res)=>{
//     console.log('form dataaaaaaa1234',req.body);
//     console.log('form dataaa3425 file',req.file);

//     const newUser= new AAbatch({
//         username:req.body.username,
//         email:req.body.email,
//         password:req.body.password,
//         Images:req.file.originalname,

//     })
//     try{
//         const savedUser= newUser.save()
//         res.status(201).json(savedUser)
//     }catch(err){
//         res.status(500).json(err)

//     }
// })




router.post('/postmethod',upload.single('Images'),(req,res)=>{  // router.post -value can be take frontend to backend  /postmethod-just a name for api, its userdefind

    // req.body have the forntend data backend
    console.log('postman data?',req.body); // req.body-data can be taken to frontend  ,it contains the data send in the post request by clients
    // const newUser=new AAbatch(req.body)  // all data is fetch to the database through the req.body

    console.log('req.file',req.file );
    console.log('reqqqqqq',req.file.originalname);

    const newUser=new AAbatch({
        username:req.body.username,
        password:Crypto.AES.encrypt(req.body.password,process.env.Crypto_js).toString(),
        email:req.body.email,
        Images:req.file.originalname,
    })
    console.log('new user',newUser);

    try{
        const saveduser= newUser.save() //savedUser must be used ..before save the new user documents to database
        res.status(200).json(saveduser)
        // 200
    }catch(err){
        res.status(500).json(err)
        // 500
    }
})







// ***************** sign up POST METHOD
    router.post('/postmethod1',async(req,res)=>{  // router.post -value can be take frontend to backend  /postmethod-just a name for api, its userdefind

    // req.body have the forntend data backend
    console.log('postman data?',req.body); // req.body-data can be taken to frontend  ,it contains the data send in the post request by clients
    // const newUser=new AAbatch(req.body)  // all data is fetch to the database through the req.body

    const newUser=new AAbatch({
        username:req.body.username,
        password:Crypto.AES.encrypt(req.body.password,process.env.Crypto_js).toString(),
        email:req.body.email
    })
    console.log('new user',newUser);

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

//  crypto
        try{
           const DB = await AAbatch.findOne  ({email:req.body.email})  // 
           !DB && res.status.apply(401).json({response:"please check your email"})
           console.log('backend data',DB);
        //    console.log(response);

           const hashedPassword = Crypto.AES.decrypt(DB.password,process.env.Crypto_js)
           console.log('hashed password',hashedPassword);

           const originalPassword = hashedPassword.toString(Crypto.enc.Utf8)  // to change buffercode 
           console.log('original password is ', originalPassword);

           originalPassword != req.body.password && res.status(404).json({response:"password and email doesn't match"})
        //    res.status(200).json("Sucess")

        const accesstoken=jwt.sign({
            id:DB._id
           },process.env.jwt_sec,
           {expiresIn:'5days'})
           
           const{password,...others}=DB._doc
           console.log('***********',others);

        res.status(200).json({...others,accesstoken})


        }catch(err){
            console.log(err);
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
        console.log('reqqqqq',req.params.id);
        try{
            const resdata=await AAbatch.findByIdAndUpdate(req.params.id,{
                
                $set:req.body
            },{new:true})
            res.status(200).json(resdata)
        }catch(err){
            res.status(500).json(err)

        }
    })

//middleware get method token verification to get the database details

    router.get('/getdataverifytoken/:id',verifyToken,verifyTokenAndauthorization,async(req,res)=>{
        try{
        const res1=await AAbatch.findById(req.params.id)
        res.status(200).json(res1)

        }catch(err){
            res.status(500).json(err)
        }
    })

module.exports=router



router.put('/updatedatainfrontend/:id', async (req, res) => {
    console.log('reqqqqq', req.params.id);
    try {
      const resdata = await AAbatch.findByIdAndUpdate(req.params.id, {
        $set: {
          username: req.body.username,
          email: req.body.email,
          // other fields if needed
        },
      }, { new: true });
      res.status(200).json(resdata);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  