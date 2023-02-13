import { ApiErorr } from "../erorrs/error.js";
import { Todo } from "../models.js";

class TodoService {
  async showTodoByEmail(userEmail) {
    if (!userEmail) {
      throw new ApiErorr.badRequest("Отсутствует почта");
    }
    const todoData = await Todo.findAll({ where: { user_email: userEmail } });
    if (!todoData) {
      throw ApiErorr.badRequest("Отсутствует почта");
    }
    return todoData;
  }
  async showTodos() {
    const todosData = await Todo.findAll();
    return todosData;
  }
  async create(user_email, title, prohress) {
    const todo = await Todo.create({ user_email, title, prohress });
    return todo;
  }
  async update(id, title, prohress) {
    const todoCand = await Todo.findOne({ where: { id } });
    if (!todoCand) {
      throw ApiErorr.badRequest("Такой почты не существует");
    }
    todoCand.title = title;
    todoCand.prohress = prohress;
    await todoCand.save();
    return todoCand;
  }
  async delete(id) {
    const todoCand = await Todo.destroy({ where: { id } });
    return todoCand;
  }
}

export const todoService = new TodoService();
