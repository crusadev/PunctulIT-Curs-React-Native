import {User} from "../models/User.js"
import CryptoJS from "crypto-js"
import validator from "validator"
import jwt from "jsonwebtoken"

export const registerUser = async (req,res) => {
    try{
        if(!validator.isEmail(req.body.email)){
            throw Error("Not a valid email")
        }
        if(!validator.isStrongPassword(req.body.password)){
            throw Error("Use a strong password")
        }
        const exists = await User.findOne({email:req.body.email})
        if(exists){
            throw Error("Account with this email already exists")
        }
        const newUser = new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:CryptoJS.AES.encrypt(req.body.password,process.env.SEC_PHRASE).toString(),
        })

        await newUser.save()
        res.status(200).json("success");
    }catch(err){
        console.log(err.message)
        res.status(400).json(err.message)
    }

}

export const loginUser = async (req,res) => {
    try{
        const foundUser = await User.findOne({email:req.body.email});
        if (!foundUser){
            return res.status(401).json("Email doesnt exist")
        }

        const foundPassword = CryptoJS.AES.decrypt(foundUser.password,process.env.SEC_PHRASE).toString(CryptoJS.enc.Utf8);
        if (foundPassword != req.body.password){
            return res.status(401).json("Incorrect password")
        }
        const accessToken = jwt.sign({
            _id:foundUser._id,
        },
        process.env.JWT_PHRASE);

        const return_user = {
            _id:foundUser._id,
            email:foundUser.email,
        }

        return res.status(200).json({...return_user,accessToken});
    }catch(err){
        return res.status(500).json(err);
    }
}

export const getUser = async (req,res) => {
    try{
        const userId = req.user._id;
        const user = await User.findById(userId).select({
            firstName:1,
            lastName:1,
            email:1,
            pages:1
        });
        if(!user){
            throw Error("User doesnt exist");
        }
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error})
    }
}