import { Router } from "express";
import authController from "../controllers/auth.controller.mjs";

const authRouter = Router();

authRouter.post("/register", authController.userRegistration);
authRouter.post("/login", authController.userLogin);

export default authRouter;