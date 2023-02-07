import { makeAutoObservable, set, toJS } from "mobx";
import { AuthService } from "../services/AuthService";

export class UserStore {
  user = {};
  isAuth = false;
  constructor() {
    makeAutoObservable(this);
  }

  setAuth(isAuth) {
    this.isAuth = isAuth;
  }
  setUser(user) {
    this.user = user;
  }

  async login(email, password) {
    try {
      const user = await AuthService.login(email, password);
      localStorage.setItem("token", user.data.accessToken);
      this.setAuth(true);
      this.setUser(user.data);
    } catch (e) {
      console.log(e);
    }
  }
  async registration(email, password) {
    try {
      const user = await AuthService.registration(email, password);
      localStorage.setItem("token", user.data.accessToken);
      this.setAuth(true);
      this.setUser(user.data);
    } catch (e) {
      console.log(e);
    }
  }
  async logout() {
    try {
      const res = await AuthService.logout();
      localStorage.removeItem("token");

      this.setAuth(false);

      this.setUser({});
    } catch (e) {
      console.log(e);
    }
  }
}
