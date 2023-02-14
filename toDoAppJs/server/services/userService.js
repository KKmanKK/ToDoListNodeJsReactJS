import { User } from "../models.js";
import { v4 } from "uuid";
import bcrypt from "bcrypt";
import { UserDTO } from "./../Dtos/UserDTO.js";
import { tokenService } from "./tokenService.js";
import { ApiErorr } from "../erorrs/error.js";

class UserService {
  async registratin(email, password) {
    const userCandidat = await User.findOne({ where: { email } });
    if (userCandidat) {
      throw ApiErorr.badRequest("Неверная почта");
    }
    const hashPass = bcrypt.hashSync(password, 4);
    const user = await User.create({ email, password: hashPass });
    const userDto = new UserDTO(user);
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(tokens.refreshToken, userDto.id);

    return {
      ...tokens,
      user: { ...userDto },
    };
  }
  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw ApiErorr.badRequest("Пользователь не найден");
    }
    const isPass = bcrypt.compareSync(password, user.password);
    if (!isPass) {
      throw ApiErorr.badRequest("Пользователь не найден");
    }
    const userDto = new UserDTO(user);
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(tokens.refreshToken, userDto.id);

    return {
      ...tokens,
      user: {
        ...userDto,
      },
    };
  }
  async logout(refreshToken) {
    const tokenData = await tokenService.removeToken(refreshToken);
    return tokenData;
  }
  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiErorr.badRequest("Пользователь не зарегестрирован");
    }
    const userData = tokenService.refreshTokenValidation(refreshToken);
    const tokenInBd = await tokenService.findToken(refreshToken);

    if (!userData || !tokenInBd) {
      throw ApiErorr.badRequest("Пользователь не зарегестрирован");
    }

    const user = await User.findOne({ where: { id: userData.id } });
    const userDto = new UserDTO(user);
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(tokens.refreshToken, userDto.id);
    return {
      ...tokens,
      user: { ...userDto },
    };
  }
}

export const userService = new UserService();
