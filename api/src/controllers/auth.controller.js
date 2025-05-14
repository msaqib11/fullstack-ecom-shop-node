import { errorType } from "../middlewares/errorHandler.middleware.js";
import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";
const salt = await bcrypt.genSalt(10);


export const register = asyncHandler(async (req, res,next) => {

    //check username already exists
    const isUserExist = await User.findOne({ username: req.body.username });
    if(isUserExist){
        return next(errorType.badRequest("Username already exists"));
    }
    const { username, email, password:plainPassword } = req.body;
    const hashedPassword = bcrypt.hashSync(plainPassword, salt);
    const newUser = new User({ username, email, password:hashedPassword });
    const savedUser = await newUser.save();
    const { password, ...user } = savedUser._doc;
    res.status(201).json(user);
})


export const login = asyncHandler(async (req,res,next)=>{
    const { username, password } = req.body;
    const user = await User.findOne({username});
    if(!user){
        return next(errorType.notFound("User not found"));
    }
    const isPasswordCorrect = await bcrypt.compare(password,user.password);
    if(!isPasswordCorrect){
        return next(errorType.badRequest("Wrong Credentials"));
        
    }
    const accessToken = jwt.sign({id:user._id,isAdmin:user.isAdmin},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN});

    const {password:userPassword,...userData} = user._doc;
    res.status(200).json({...userData,accessToken});
})