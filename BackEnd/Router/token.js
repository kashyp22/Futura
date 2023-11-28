


const router=require('express').Router()
const AAbatch=require('../Models/Userschema')

// const jwt=require('jsonwebtoken')
const Crypto=require('crypto-js')


    router.post('/postmethod',async(req,res)=>{  // router.post -value can be take frontend to backend  /postmethod-just a name for api, its userdefind

    // req.body have the forntend data backend
    console.log('postman data?',req.body); // req.body-data can be taken to frontend  ,it contains the data send in the post request by clients
    // const newUser=new AAbatch(req.body)  // all data is fetch to the database through the req.body

    const newUser=new AAbatch({
        username:req.body.username,
        password:Crypto.AES.encrypt(req.body.password, process.env.secret).toString(),
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
router.post('/token', async (req,res)=>{
    console.log(req.body);

    //  crypto
            try{
               const DB = await AAbatch.findOne({email:req.body.email})  // 
               !DB && res.status.apply(401).json({response:"please check your email"})
               console.log('backend data',DB);
    
            //    const hashed = Crypto.AES.decrypt(DB.password,process.env.Crypto_js)
                const hashed=Crypto.AES.decrypt(DB.password, process.env.secret)
               console.log('hashed password',hashed);
    
               const original=hashed.toString()  // to change buffercode 
            //    console.log(originalPassword);
               console.log('original password is ', original);
               
               original!=req.body.password && res.status(404).json({response:"password and email doesn't match"})
               res.status(200).json("Sucess")
                
            //    const accesstoken=jwt.sign({
            //     id:DB._id
            //    },process.env.jwt_sec,
            //    {expiresIn:'5d'})
               
            //    const{password,...others}=DB._doc
            //    console.log('***********',others);

            //    res.status(200).json({...others,accesstoken})
    
            }catch(err){
                console.error(err);

                return res.status(400)
    
            }
        })

    module.exports=router