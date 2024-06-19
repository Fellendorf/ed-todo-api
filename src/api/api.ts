import { Router } from "express";
import DatabaseService from "../services/database.service";
import TodoItem from "../entities/todoItem";

const router = Router();

router.all("/", (req, res, next) => {
  console.log("Authentication check should be here");
  next();
});

router.get("/", async (req, res, next) => {
  try {
    const todos = await DatabaseService.getTodos();
    res.send(todos);
  } catch (err: any) {
    next(err);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const item = new TodoItem(req.body);
    const todos = await DatabaseService.addTodo(item);
    res.send(todos);
  } catch (err: any) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const todos = await DatabaseService.deleteTodo(Number(id));
    res.send(todos);
  } catch (err: any) {
    next(err);
  }
});

export default router;
