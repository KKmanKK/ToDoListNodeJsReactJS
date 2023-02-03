import { makeAutoObservable } from "mobx";
class TodoStore {
  constructor() {
    makeAutoObservable(this);
  }
}
