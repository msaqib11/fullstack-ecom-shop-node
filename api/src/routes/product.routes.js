import  { Router } from "express";
import {  verifyTokenAndAdmin } from "../middlewares/verifyToken.middleware.js";
import { productController } from "../controllers/index.js";
const router = Router();        

//create
router.post("/create-product",verifyTokenAndAdmin,productController.createProduct)

//update 
router.put("/update-product/:id",verifyTokenAndAdmin,productController.updateProduct)

//delete 
router.delete("/delete-product/:id",verifyTokenAndAdmin,productController.deleteProduct)

//get product by id
router.get("/get-product/:id",productController.getProduct)


//get all products
router.get("/",productController.getAllProducts)


export default router;