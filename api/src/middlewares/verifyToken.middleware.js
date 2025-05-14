import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import { errorType } from "./errorHandler.middleware.js";
const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return next(errorType.unauthorized("No token provided"));
    }
    const token = authHeader.split(" ")[1];

    if(!token){
        return next(errorType.unauthorized("Invalid token format"));
    }
    jwt.verify(token,JWT_SECRET,(err,decoded)=>{
        if(err){
            return next(errorType.unauthorized("Invalid token"));
        }

        req.user = decoded;
        next();
    })
}



const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,(err)=>{
        if(err){
            return next(err);
        }
        if(!req.user.isAdmin){
            return next(errorType.forbidden("You are not authorized to access this route"));
        }
        next();
    })
}

const verifTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res,(err)=>{
        if(err){
            return next(err);
        }
        if(req.user.isAdmin || req.user.id === req.params.id){
            next();
        }
        else{
            return next(errorType.forbidden("You are not authorized to access this route"));
        }
    })
}

export {verifyToken,verifTokenAndAuthorization,verifyTokenAndAdmin};