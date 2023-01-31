import { todoService } from "../services/todoService.js";

class TodoController{
    async createTodo(req,res){
        try{

        }
        catch(e){
            console.log(e);
        }
    }
    async showTodoForEmail(req,res){
        try{
            const {userEmail} = req.params;
    
            const todo = await todoService.showTodoByEmail(userEmail);
            return res.status(200).json(todo);
        }
        catch(e){
            console.log(e);
        }
    }
    async showTodos(req,res){
        try{
            const todos = await todoService.showTodos();
            return res.status(200).json(todos)
        }
        catch(e){
            console.log(e)
        }
    }
}

export const todoController = new TodoController();