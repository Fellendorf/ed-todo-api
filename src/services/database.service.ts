import { writeFile, readFile } from "fs/promises";
import TodoItem from "../entities/todoItem";

class Database {
  private readonly PATH = "database.json";

  public async getTodos() {
    try {
      const data = await readFile(this.PATH, "utf-8");
      const todos: TodoItem[] = JSON.parse(data);

      return todos;
    } catch (err: any) {
      if (err.code === "ENOENT") {
        return [] as TodoItem[];
      }
      throw err;
    }
  }

  public async addTodo(item: TodoItem) {
    const todos = await this.getTodos();

    todos.push(item);
    await writeFile(this.PATH, JSON.stringify(todos), "utf-8");

    return todos;
  }

  public async deleteTodo(id: number) {
    let todos = await this.getTodos();

    todos = todos.filter((item) => item.id !== id);
    await writeFile(this.PATH, JSON.stringify(todos), "utf-8");

    return todos;
  }
}

export default new Database();
