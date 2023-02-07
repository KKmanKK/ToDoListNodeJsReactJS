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
    const userData = tokenService.accessTokenValidation(accessToken);

    if (!userData) {
      throw new Error("Пользователь не автаризован");
    }
    req.user = userData;
    next();
  } catch (e) {
    console.log(e);
  }
};
