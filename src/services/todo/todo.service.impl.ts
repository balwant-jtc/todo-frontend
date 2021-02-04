
import {APIServiceImpl, ServiceResponse} from '../api';

import {Todo, TodoList} from './../../models/todo.model';
import {TodoService} from './todo.service';

class TodoServiceImpl extends APIServiceImpl implements TodoService {
  static readonly RESOURCE = '/todos';

  async getTodos(): Promise<ServiceResponse<TodoList>> {
    try {
      const response = await this.get(TodoServiceImpl.RESOURCE);
      const todos = new TodoList(response.data)
      return new ServiceResponse<TodoList>(todos);
    } catch (e) {
      return new ServiceResponse<TodoList>(undefined, APIServiceImpl.parseError(e));
    }
  }

  async add(todo: Todo): Promise<ServiceResponse<Todo>> {
    try {
      const response = await this.post(TodoServiceImpl.RESOURCE, todo);
      const newTodo = new Todo(response.data)
      return new ServiceResponse<Todo>(newTodo);
    } catch (e) {
      return new ServiceResponse<Todo>(undefined, APIServiceImpl.parseError(e));
    }
  }
}

export default new TodoServiceImpl()
