import { errorType } from "../middlewares/errorHandler.middleware.js";
import { Product } from "../models/index.js";
import { asyncHandler } from "../utils/asyncHandler.js";


export const createProduct = asyncHandler(async (req, res, next) => {
    const product = await new Product(req.body).save();
    res.status(201).json(product)
})

export const updateProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(product)
})

export const deleteProduct = asyncHandler(async (req, res, next) => {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted")
})

export const getProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        next(errorType.notFound("Product not found"));
    }
    res.status(200).json(product)
})

export const getAllProducts = asyncHandler(async (req,res,next)=>{
    const {newProducts,category} = req.query;
    let products;
    if(newProducts){
        products = await Product.find().sort({createdAt:-1}).limit(1);
    }else if(category){
        products = await Product.find({category:{$in:[category]}}).sort({createdAt:-1}).limit(5);
    }else{
        products = await Product.find({}).sort({createdAt:-1}).limit(5);
    }
    res.status(200).json(products);
})