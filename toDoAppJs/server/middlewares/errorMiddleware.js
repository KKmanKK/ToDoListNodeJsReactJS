import { ApiErorr } from "../erorrs/error.js";

export const errorMiddleware = (err, req, res, next) => {
  console.log(err);
  if (err instanceof ApiErorr) {
    return res
      .status(err.status)
      .json({ messege: err.message, errors: err.errors });
  }
  return res.status(500).json({ message: "Непредвиденная ошибка" });
};
