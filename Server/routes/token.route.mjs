import { Router } from "express";
import tokenController from "../controllers/token.controller.mjs";

const tokenRouter = Router();

tokenRouter.post("/", tokenController.getToken);
tokenRouter.post("/verify", tokenController.verifyToken);

export default tokenRouter;