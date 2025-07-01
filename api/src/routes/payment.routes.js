import { Router } from "express";
import { paymentController } from "../controllers/index.js";

const router = Router();

//create checkout session
router.post("/create-checkout-session",paymentController.createCheckoutSession)

export default router;