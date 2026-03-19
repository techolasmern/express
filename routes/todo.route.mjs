import { Router } from "express";
import controller from "../controllers/todo.controller.mjs";

const todoRouter = Router();

todoRouter.post("/", controller.createTodo);

export default todoRouter;