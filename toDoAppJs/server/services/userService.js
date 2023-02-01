import { User } from "../models";
import { v4 } from "uuid";
import bcrypt from "bcrypt";
class UserService {
  async registratin(email, password) {
    const userCandidat = await User.findOne({ where: { email } });
    if (!userCandidat) {
      throw new Error("Пользователь с такой почтой уже существует");
    }
    const hashPass = bcrypt.hashSync(password, 4);
    const user = await User.create({ email, password: hashPass });
  }
  async login(email, password) {}
  async logout(refreshToken) {}
}

export const userService = new UserService();
