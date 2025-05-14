import { errorType } from "../middlewares/errorHandler.middleware.js";
import {Cart} from "../models/index.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const addToCart = asyncHandler(async (req,res,next)=>{
    const cart = await new Cart(req.body).save();
    res.status(201).json(cart);
})

export const updateCart = asyncHandler(async (req,res,next)=>{
    const cart = await Cart.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(cart);
})

export const deleteCart = asyncHandler(async (req,res,next)=>{
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted");
})

export const getCart = asyncHandler(async (req,res,next)=>{
    const cart = await Cart.findById(req.params.id);
    if(!cart){
        return next(errorType.notFound("Cart not found"));
    }
    res.status(200).json(cart);
})

export const getAllCarts = asyncHandler(async (req,res,next)=>{
    const allCarts = await Cart.find({})
    res.status(200).json(allCarts);
})