import * as _ from 'lodash';

export class Todo {
  id: string;
  title: string;
  isCompleted?: boolean;
  constructor(todo: any) {
    this.id = todo._id;
    this.title = todo.title;
    this.isCompleted = false;
  }
}

export class TodoList {
  readonly todos: Todo[] = [];
  constructor(data: Todo[]) {
    this.todos = [];
    _.forEach(data, (item): void => {
      this.todos.push(new Todo(item));
    });
  }
}



// Todo form interface
export interface TodoFormInterface {
  todos: Todo[];
  handleTodoCreate: (todo: any) => void;
}

// Todo list interface
export interface TodoListInterface {
  handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  todos: Todo[]
}

// Todo item interface
export interface TodoItemInterface {
  handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  todo: Todo;
}