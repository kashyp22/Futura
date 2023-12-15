const jwt = require('jsonwebtoken')

const verifyToken=(req,res,next) =>{
    console.log('verifyToken req',req);
    console.log('req.headers.token',req.headers.token);

    var reqheaderToken = req.headers.token;
    console.log('reqheadtokrn',reqheaderToken);
    if(reqheaderToken){
        const token = reqheaderToken.split(" ")[1];
        console.log('seperate split token',token);

        jwt.verify(token,process.env.jwt_sec,(err,user) => {
            if(err){
                console.log('if err verifytoken',err);
                return res.status(403).json(" token is not valid")
            }
                req.user = user;
                console.log("user after check",user);
                // 
                next();
        });
    } else {
        return res.status(401).json({ Error: "token not found "})
    }

};

const verifyTokenAndauthorization = (req,res,next) => {
    verifyToken(req,res,(data) => {
        console.log('data in verifyTokenAndauthorization/verifttoken',data);
        console.log('req.user.id',req.user.id);
        console.log('req.params.id',req.params.id);
        if(req.user.id == req.params.id){
            // 
            next()
        }else{
            return res.status(401).json('you are not allowed')
        }
    })
}

module.exports = {verifyToken,verifyTokenAndauthorization}