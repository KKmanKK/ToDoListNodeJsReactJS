import { Router } from "express";
import { todoController } from "../controllers/todoController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const todoRouter = Router();

todoRouter.get(
  "/todo/:userEmail",
  authMiddleware,
  todoController.showTodoForEmail
);
todoRouter.get("/todo", authMiddleware, todoController.showTodos);
todoRouter.post("/todo", todoController.createTodo);
todoRouter.put("/todo", todoController.upDateTodo);
todoRouter.delete("/todo/:id", todoController.deleteTodo);
