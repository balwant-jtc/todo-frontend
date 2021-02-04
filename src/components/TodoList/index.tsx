import * as React from "react";

// Import TodoItem
import TodoItem from "./../TodoItem";

// Import interfaces
import { TodoListInterface } from "./../../models/todo.model";

const TodoList = (props: TodoListInterface) => {
  return (
    <div className="todo-list">
      <ul>
        {props.todos.map((todo) => (
          <li key={`_${todo.id}`}>
            <TodoItem
              key={todo.id}
              todo={todo}
              handleTodoUpdate={props.handleTodoUpdate}
              handleTodoRemove={props.handleTodoRemove}
              handleTodoComplete={props.handleTodoComplete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
