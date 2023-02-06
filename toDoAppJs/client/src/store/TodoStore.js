import { makeAutoObservable } from "mobx";
import { TodoService } from "./../services/TodoService";
export class TodoStore {
  constructor() {
    makeAutoObservable(this);
  }
  todo = [];

  setTodo(todo) {
    this.todo = todo;
  }
  async create(user_email, title, prohress) {
    try {
      const todo = await TodoService.createTodo(user_email, title, prohress);
      this.setTodo(todo);
    } catch (e) {
      console.log(e);
    }
  }
  async update(id, title, prohress) {
    try {
      const todo = await TodoService.updateTodo(id, title, prohress);
      this.setTodo(todo);
    } catch (e) {
      console.log(e);
    }
  }
  async create(user_email, title, prohress) {
    try {
      const todo = await TodoService.createTodo(user_email, title, prohress);
      this.setTodo(todo);
    } catch (e) {
      console.log(e);
    }
  }
}
