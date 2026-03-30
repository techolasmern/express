import { Router } from "express";
import todoController from "../controllers/todo.controller.mjs";

const todoRoute = Router()

todoRoute.get("/", todoController.renderTodoPage);
todoRoute.post("/", todoController.createTask);

export default todoRoute