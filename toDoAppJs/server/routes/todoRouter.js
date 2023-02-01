import { Router } from "express";
import { todoController } from "../controllers/todoController.js";

export const todoRouter = Router();

todoRouter.get("/todo/:userEmail",todoController.showTodoForEmail);
todoRouter.get("/todo",todoController.showTodos);
todoRouter.post("/todo",todoController.createTodo);
todoRouter.put("/todo",todoController.upDateTodo);
todoRouter.delete("/todo/:id",todoController.deleteTodo);