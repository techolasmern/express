import { Router } from "express";
import controller from "../controllers/user.controller.mjs";

const userRouter = Router();

userRouter.get("/sample", controller.get_users);

export default userRouter;
