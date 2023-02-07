import { $api } from "../http";

export class TodoService {
  static async createTodo(user_email, title, prohress) {
    return $api.post("/todo", { user_email, title, prohress });
  }
  static async updateTodo(id, title, prohress) {
    return $api.put("/todo", { id, title, prohress });
  }
  static async deleteTodo(id) {
    return $api.delete(`/todo/${id}`);
  }
  static async showTodos(user_emai) {
    return $api.get(`/todo/${user_emai}`);
  }
}
