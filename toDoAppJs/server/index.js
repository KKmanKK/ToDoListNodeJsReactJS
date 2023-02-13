import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { sequelize } from "./bd.js";
import { todoRouter } from "./routes/todoRouter.js";
import { userRouter } from "./routes/userRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(cookieParser());
app.use("/api", todoRouter);
app.use("/api", userRouter);
app.use(errorMiddleware);
const start = () => {
  try {
    sequelize.sync();
    sequelize.authenticate();
    app.listen(PORT, () => {
      console.log("Сервер запущен");
    });
  } catch (e) {
    console.log(e);
  }
};
start();
