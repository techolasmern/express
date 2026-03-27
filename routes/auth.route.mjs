import { Router } from "express";
import authController from "../controllers/auth.controller.mjs";

const authRouter = Router();

authRouter.post("/register", authController.userRegistration);

export default authRouter;