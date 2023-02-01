import { todoService } from "../services/todoService.js";

class TodoController {
  async createTodo(req, res) {
    try {
      const { user_email, title, prohress } = req.body;
      const todo = await todoService.create(user_email, title, prohress);
      return res.status(200).json(todo);
    } catch (e) {
      console.log(e);
    }
  }
  async upDateTodo(req, res) {
    try {
      const { id, title, prohress } = req.body;
      const todo = await todoService.update(id, title, prohress);
      return res.status(200).json(todo);
    } catch (e) {
      console.log(e);
    }
  }
  async showTodoForEmail(req, res) {
    try {
      const { userEmail } = req.params;

      const todo = await todoService.showTodoByEmail(userEmail);
      return res.status(200).json(todo);
    } catch (e) {
      console.log(e);
    }
  }
  async showTodos(req, res) {
    try {
      const todos = await todoService.showTodos();
      return res.status(200).json(todos);
    } catch (e) {
      console.log(e);
    }
  }
  async deleteTodo(req, res) {
    try {
      const { id } = req.params;
      const todo = await todoService.delete(id);
      return res.status(200).json(todo);
    } catch (e) {
      console.log(e);
    }
  }
}

export const todoController = new TodoController();
