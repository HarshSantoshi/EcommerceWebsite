const jwt = require('jsonwebtoken');
const USER = require('../models/userSchema');
const secretKey = process.env.KEY;

const authenticate = async(req , res , next)=>{
    try {
        const Token = req.cookies.Ecommweb;
        const verifyToken = jwt.verify(Token ,  secretKey);
        const activeUser = await USER.findOne({_id:verifyToken._id ,"tokens.token":Token});
        if(!activeUser){
            throw new Error("User not found");
        }

        req.token = Token;
        req.rootUser = activeUser;
        req.userID = activeUser._id;

        next();
    } catch (error) {
        res.status(401).send("Unautherized User : No token provided");
        console.log(error);
    }
}
module.exports = authenticate;