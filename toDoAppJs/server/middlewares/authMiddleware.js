import { ApiErorr } from "../erorrs/error.js";
import { tokenService } from "./../services/tokenService.js";
export const authMiddleware = (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return next(ApiErorr.unAuthError());
    }
    const accessToken = authorizationHeader.split(" ")[1];
    if (!accessToken) {
      return next(ApiErorr.unAuthError());
    }
    const userData = tokenService.accessTokenValidation(accessToken);

    if (!userData) {
      return next(ApiErorr.unAuthError());
    }
    req.user = userData;
    next();
  } catch (e) {
    return next(ApiErorr.unAuthError);
  }
};
