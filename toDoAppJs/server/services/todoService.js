import { Todo } from "../models.js";

class TodoService {
  async create() {}
  async showTodoByEmail(userEmail) {
    if (!userEmail) {
      throw new Error("Отсутствует почта");
    }
    const todoData = Todo.findAll({ where: { user_email: userEmail } });
    if (!todoData) {
      throw new Error("Отсутствует почта");
    }
    return todoData;
  }
  async showTodos() {
    const todosData = await Todo.findAll();
    return todosData;
  }
}

export const todoService = new TodoService();
