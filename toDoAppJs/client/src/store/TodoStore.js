import { makeAutoObservable, toJS } from "mobx";
import { TodoService } from "./../services/TodoService";
export class TodoStore {
  constructor() {
    makeAutoObservable(this);
  }
  todo = [];

  setTodo(todo) {
    this.todo = todo;
  }

  async update(id, title, prohress) {
    try {
      const todo = await TodoService.updateTodo(id, title, prohress);
      this.setTodo((prev) => [...prev, todo]);
      return todo;
    } catch (e) {
      console.log(e);
    }
  }
  async delete(id) {
    try {
      const todo = await TodoService.deleteTodo(id);
      console.log(todo);
      this.setTodo((prev) => prev.filter((t) => t.id != todo.id));
      return todo;
    } catch (e) {
      console.log(e);
    }
  }
  async create(user_email, title, prohress) {
    try {
      const todo = await TodoService.createTodo(user_email, title, prohress);
      this.setTodo((prev) => [...prev, todo]);
      return todo;
    } catch (e) {
      console.log(e);
    }
  }
  async show(user_email) {
    try {
      const todo = await TodoService.showTodos(user_email);
      this.setTodo(todo);
    } catch (e) {
      console.log(e);
    }
  }
}
