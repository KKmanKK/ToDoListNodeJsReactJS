import { todoService } from "../services/todoService.js";

class TodoController {
  async createTodo(req, res, next) {
    try {
      const { user_email, title, prohress } = req.body;
      const todo = await todoService.create(user_email, title, prohress);
      return res.status(200).json(todo);
    } catch (e) {
      next(e);
    }
  }
  async upDateTodo(req, res, next) {
    try {
      const { id, title, prohress } = req.body;
      const todo = await todoService.update(id, title, prohress);
      return res.status(200).json(todo);
    } catch (e) {
      next(e);
    }
  }
  async showTodoForEmail(req, res, next) {
    try {
      const { userEmail } = req.params;

      const todo = await todoService.showTodoByEmail(userEmail);
      return res.status(200).json(todo);
    } catch (e) {
      next(e);
    }
  }
  async showTodos(req, res, next) {
    try {
      const todos = await todoService.showTodos();
      return res.status(200).json(todos);
    } catch (e) {
      next(e);
    }
  }
  async deleteTodo(req, res, next) {
    try {
      const { id } = req.params;
      const todo = await todoService.delete(id);
      return res.status(200).json(todo);
    } catch (e) {
      next(e);
    }
  }
}

export const todoController = new TodoController();
