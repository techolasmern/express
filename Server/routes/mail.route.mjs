import { Router } from "express";
import mailController from "../controllers/mail.controller.mjs";

const mailRouter = Router();

mailRouter.post("/send", mailController.sendMailUsingNodeMailer)
mailRouter.post("/send-otp", mailController.sendOtp)

export default mailRouter;