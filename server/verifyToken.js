import jwt from "jsonwebtoken"


export const verifyToken = (req, res, next)=>{
    const token =req.cookies.access_token
    if (!token)return next (createError(401, "you are authenticated!"))
   

    jwt.verify(token, process.env.JWT,(err, user)=>{
    if(err) return next (createError(403, "token is not valid!!"))
  req.user=user;
    next()

    })


}