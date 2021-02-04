import * as React from "react";
import { useAsyncEffect } from "use-async-effect";

// Import components
import TodoFormComponent from "../../components/TodoForm";
import TodoListComponent from "../../components/TodoList";
import { Todo } from "./../../models/todo.model";

import TodoService from "../../services/todo/todo.service.impl";

// Import styles
import "./style.css";

const TodoContainer = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  useAsyncEffect(async () => {
    const response = await TodoService.getTodos();
    if (response.hasData() && response.data) {
      // Update todos state
      setTodos(response.data.todos);
    }
  }, []);

  // Creating new todo item
  async function handleTodoCreate(todo: any) {
    // Prepare new todos state
    const newTodosState: Todo[] = [...todos];

    // Update new todos state
    const response = await TodoService.add(todo);
    if (response.hasData() && response.data) {
      newTodosState.push(response.data);

      // Update todos state
      setTodos(newTodosState);
    }
  }

  // Update existing todo item
  function handleTodoUpdate(
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) {
    // Prepare new todos state
    const newTodosState: Todo[] = [...todos];

    // Find correct todo item to update
    newTodosState.find((todo: Todo) => todo.id === id)!.title =
      event.target.value;

    // Update todos state
    setTodos(newTodosState);
  }

  // Remove existing todo item
  function handleTodoRemove(id: string) {
    // Prepare new todos state

    const newTodosState: Todo[] = todos.filter((todo: Todo) => todo.id !== id);

    // Update todos state
    setTodos(newTodosState);
  }

  // Check existing todo item as completed
  function handleTodoComplete(id: string) {
    // Copy current todos state
    const newTodosState: Todo[] = [...todos];

    // Find the correct todo item and update its 'isCompleted' key
    newTodosState.find(
      (todo: Todo) => todo.id === id
    )!.isCompleted = !newTodosState.find((todo: Todo) => todo.id === id)!
      .isCompleted;

    // Update todos state
    setTodos(newTodosState);
  }


  return (
    <div className="todo-list-app">
      <TodoFormComponent todos={todos} handleTodoCreate={handleTodoCreate} />

      <TodoListComponent
        todos={todos}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoRemove={handleTodoRemove}
        handleTodoComplete={handleTodoComplete}
      />
    </div>
  );
};

export default TodoContainer;
