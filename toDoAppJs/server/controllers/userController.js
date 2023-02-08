import { userService } from "../services/userService.js";

class UserController {
  async registrationUser(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userService.registratin(email, password);
      res.cookie("refreshToken", user.refreshToken, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.status(200).json(user);
    } catch (e) {
      console.log(e);
    }
  }
  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userService.login(email, password);
      res.cookie("refreshToken", user.refreshToken, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.status(200).json(user);
    } catch (e) {
      console.log(e);
    }
  }
  async logoutUser(req, res) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.status(200).json(token);
    } catch (e) {
      console.log(e);
    }
  }
  async tokenRefresh(req, res) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.status(200).json(userData);
    } catch (e) {
      console.log(e);
    }
  }
}

export const userController = new UserController();
