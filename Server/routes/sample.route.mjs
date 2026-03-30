import { Router } from "express";
import controller from "../controllers/sample.controller.mjs";

const sampleRoute = Router()

sampleRoute.get("/", controller.renderFile);

export default sampleRoute