import { makeAutoObservable, set, toJS } from "mobx";
import { AuthService } from "../services/AuthService";
import axios from "axios";
import { API_URL } from "./../http/index";

export class UserStore {
  user = {};
  isAuth = false;
  isLoading = false;
  constructor() {
    makeAutoObservable(this);
  }

  setAuth(isAuth) {
    this.isAuth = isAuth;
  }
  setUser(user) {
    this.user = user;
  }
  setLoading(isLoad) {
    this.isLoading = isLoad;
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
  async checkAuth() {
    this.setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });

      localStorage.setItem("token", res.data.accessToken);
      this.setAuth(true);
      this.setUser(res.data);
    } catch (e) {
      console.log(e);
    } finally {
      this.setLoading(false);
    }
  }
}
