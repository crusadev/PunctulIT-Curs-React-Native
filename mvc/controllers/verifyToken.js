import jwt from "jsonwebtoken"

const verifyToken = async (req,res,next) => {
    try{
        if(req.headers.authorization){
            jwt.verify(req.headers.authorization,process.env.JWT_PHRASE,(err,user) => {
                if(err){
                    console.log("jwt verify error")
                    throw Error(err)
                }else{
                    req.user = user
                }
                next();
            })
        }else{
            throw Error("Unauthorized")
        }
    }catch(err){
        console.log(err)
        res.status(401).json(err.message)
    }
}

export const verifyTokenAndAuthorize = (req,res,next) => {
    verifyToken(req,res,() => {
        console.log(req.user)
        console.log(req.query.userId)
        if (req.user._id === req.query.userId){
            next();
        }else{
            res.status(403).json("Unauthorized");
        }
    })
}