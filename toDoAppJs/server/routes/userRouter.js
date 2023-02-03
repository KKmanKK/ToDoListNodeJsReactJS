import { Router } from "express";
import { userController } from "./../controllers/userController.js";

export const userRouter = Router();

userRouter.post("/login", userController.loginUser);
userRouter.post("/registration", userController.registrationUser);
userRouter.post("/logout", userController.logoutUser);
userRouter.get("/refresh", userController.tokenRefresh);
