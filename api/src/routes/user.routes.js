import  { Router } from "express";
import { userController } from "../controllers/index.js";
import { verifTokenAndAuthorization, verifyTokenAndAdmin } from "../middlewares/verifyToken.middleware.js";

const router = Router();    
//update user
router.put("/update/:id",verifTokenAndAuthorization,userController.updateUser)
//delete user
router.delete("/delete/:id",verifTokenAndAuthorization,userController.deleteUser)
//get user
router.get("/get-user/:id",verifyTokenAndAdmin,userController.getUser)

//get all users
router.get("/get-all-users",userController.getAllUsers)

//get users monthly stats
router.get("/get-users-monthly-stats",userController.getUsersMonthlyStats)
export default router;