import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { sequelize } from "./bd.js";
import { todoRouter } from "./routes/todoRouter.js";
import { userRouter } from "./routes/userRouter.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api", todoRouter);
app.use("/api", userRouter);
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
