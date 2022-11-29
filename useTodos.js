import { useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodos = (initialState = []) => {
  //const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || []; //recupera información de localStorage
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  const onHandleTodo = (todo) => {
    //console.log({ todo });
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: id,
    };

    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    //console.log(id);
    const action = {
      type: "[TODO] Toggle Todo",
      payload: id,
    };

    dispatch(action);
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    onHandleTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
