import { DataTypes } from "sequelize";
import { sequelize } from "./bd.js";
export const Todo = sequelize.define("todo", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_email: { type: DataTypes.STRING },
  title: { type: DataTypes.STRING },
  prohress: { type: DataTypes.INTEGER },
});
export const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});
export const Token = sequelize.define("token", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  refreshToken: { type: DataTypes.STRING },
});

User.hasOne(Token);
Token.belongsTo(User);
