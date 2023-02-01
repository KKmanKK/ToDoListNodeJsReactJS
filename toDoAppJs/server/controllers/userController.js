import { userService } from "../services/userService";

class UserController {
  async registrationUser(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userService.registratin(email, password);
      res.cookies("refreshToken", user.refreshToken, {
        maxAge: 23,
        httpOnly: true,
      });
      return res.status(200).json(user);
    } catch (e) {
      console.log(e);
    }
  }
  async loginUser(req, res) {
    try {
    } catch (e) {
      console.log(e);
    }
  }
  async logoutUser(req, res) {
    try {
    } catch (e) {
      console.log(e);
    }
  }
}

export const userController = new UserController();
