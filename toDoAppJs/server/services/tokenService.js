import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Token } from "../models.js";
dotenv.config();
class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET_KEY, {
      expiresIn: "15s",
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
    const tokenData = await Token.findOne({ where: { userId } });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await Token.create({ refreshToken, userId });
  }
  async removeToken(refreshToken) {
    const tokenData = await Token.destroy({ where: { refreshToken } });
    return tokenData;
  }

  accessTokenValidation(accessToken) {
    try {
      const tokenData = jwt.verify(accessToken, process.env.ACCESS_SECRET_KEY);

      return tokenData;
    } catch (e) {
      return null;
    }
  }

  refreshTokenValidation(refreshToken) {
    try {
      const tokenData = jwt.verify(
        refreshToken,
        process.env.REFRESH_SECRET_KEY
      );
      return tokenData;
    } catch (e) {
      return null;
    }
  }
  async findToken(refreshToken) {
    const tokenData = await Token.findOne({ where: { refreshToken } });

    if (!tokenData) {
      return null;
    }
    return tokenData;
  }
}

export const tokenService = new TokenService();
