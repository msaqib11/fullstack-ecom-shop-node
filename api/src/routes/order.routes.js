import  { Router } from "express";
import {orderController} from "../controllers/index.js";
const router = Router();

//create order
router.post("/create-order",orderController.createOrder)

//monthly income
router.get("/monthly-income",orderController.monthlyIncome)


export default router;