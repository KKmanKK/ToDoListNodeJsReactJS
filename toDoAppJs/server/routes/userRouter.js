import { Router } from "express";
import { userController } from "./../controllers/userController.js";
import { body } from "express-validator";
export const userRouter = Router();

userRouter.post("/login", userController.loginUser);
userRouter.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 12 }),
  userController.registrationUser
);
userRouter.post("/logout", userController.logoutUser);
userRouter.get("/refresh", userController.tokenRefresh);
