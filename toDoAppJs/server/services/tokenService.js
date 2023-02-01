import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Token } from "../models";
dotenv.config();
class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET_KEY, {
      expiresIn: "15h",
    });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET_KEY, {
      expiresIn: "30d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }
  async saveToken(refreshToken, userId) {
    const tokenData = await Token.findOne({ where: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      await tokenData.save();
    }
    const token = await Token.create({ refreshToken, userId });
  }
  async removeToken(refreshToken) {
    const tokenData = await Token.destroy({ where: refreshToken });
    return tokenData;
  }
}

export const tokenService = new TokenService();
