import { DataTypes } from "sequelize"
import { sequelize } from "./bd.js"
export const Todo = sequelize.define("todo", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_email: { type: DataTypes.STRING },
    title: { type: DataTypes.STRING },
    prohress: { type: DataTypes.INTEGER }
})
export const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING}
})

