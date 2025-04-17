import jwt from 'jsonwebtoken';
const {verify} = jwt;
const accessTokenSecret = 'Bookinappsecret';
const accessTokenSecretAdmin = 'AdminSecret'


const authenticateJWT = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.send("Authentication or login to access");
    }
}
const AuthenticateAdminAPI=(req,res,next)=>{
    const authHeader=req.headers.authorization
    if(authHeader){
        const token = authHeader.split(' ')[1];
        verify(token, accessTokenSecretAdmin, (err,user)=>{
            if(err){
                console.log(err)
                return res.status(403).json({message:"Invalid Token"})
            }
            next()
        })

    }else{
        res.status(400).json({message:"Internal Error"})
    }
}
export  {authenticateJWT, AuthenticateAdminAPI};