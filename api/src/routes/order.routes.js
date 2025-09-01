import  { Router } from "express";
import {orderController} from "../controllers/index.js";
import { verifTokenAndAuthorization } from "../middlewares/verifyToken.middleware.js";
const router = Router();

//create order
router.post("/create-order",orderController.createOrder)

//monthly income
router.get("/monthly-income",verifTokenAndAuthorization,orderController.monthlyIncome)


//get order

router.get("/:id",verifTokenAndAuthorization,orderController.getOrder)

//get all orders
router.get("/",verifTokenAndAuthorization,orderController.getAllOrders)

export default router;