import { tokenService } from "./../services/tokenService.js";
export const authMiddleware = (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      throw new Error("Пользователь не автаризован");
    }
    const accessToken = authorizationHeader.split(" ")[1];
    if (!accessToken) {
      throw new Error("Пользователь не автаризован");
    }
    const tokenData = tokenService.accessTokenValidation(accessToken);
    if (!tokenData) {
      throw new Error("Пользователь не автаризован");
    }
    res.user = tokenData;
    next();
  } catch (e) {
    console.log(e);
  }
};
