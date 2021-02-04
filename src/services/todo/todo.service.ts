import {ServiceResponse} from "../api";
import {Todo, TodoList} from "./../../models/todo.model";

export interface TodoService {
  add: (todo: Todo) => Promise<ServiceResponse<Todo>>;
  getTodos: () => Promise<ServiceResponse<TodoList>>;
}
