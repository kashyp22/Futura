const nodemailer = require('nodemailer');
const mailer = require('../models/user')
const dotenv=require('dotenv')
dotenv.config()

//  class 2 node mailer

const transporter = nodemailer.createTransport({
  service: "gmail",
   
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.Email,
      pass: process.env.Email_password,
    },
  });


// class one node mailer

// console.log('otppp math.random radom number generate',Math.random());

function generateOtp(){
  
    return Math.floor(100000 + Math.random() * 900000).toString();
}

const signup =async(req,res)=>{

    const {email} = req.body;
    console.log('email in req.body',email);

    const otp = generateOtp();
    const otpExpiration = new Date(Date.now()+ 5 * 60 * 1000);

    console.log('email otp ',otp,otpExpiration,email );



const user=new mailer({
    email,
    otp,
    otpExpiration
})
 try{
   const res1=await user.save();

//    send otp via email
    const mailOptions= {
        from: process.env.Email,
        to:email,
        subject:"your otp code ",
        text:`your otp is :${otp}`,
    };

    console.log("mail option", mailOptions);

    const info = await transporter.sendMail(mailOptions);
    console.log("email send",info.response);






   console.log(res1);
   return res.status(200).json({message:"otp send succussfuly",otp})
   


   
 }catch(err){
    
    console.log("error saving user:",err);
    return res.status(500).json({error:"error sending otp mail"})

 }
}
module.exports = {signup};
