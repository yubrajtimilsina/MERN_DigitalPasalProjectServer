

import  Express  from "express";
import UserController from "../controllers/userController";

const router = Express.Router()

//router.post("/register",UserController.register)

router.route("/register").post(UserController.register)

export default router