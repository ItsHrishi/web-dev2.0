import { createContext, useContext } from "react";

//conext created
export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
});

//Provider element
export const TodoProvider = TodoContext.Provider;

//to avoid imports
export function useTodo() {
  return useContext(TodoContext);
}
