import { useEffect, useState } from "react";

import "./App.css";
import { TodoProvider } from "./contexts";
import { TodoItem, TodoForm } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    console.log("inp", { id: Date.now(), ...todo });
    setTodos((prev) => {
      console.log("in add: ", prev);
      return [{ id: Date.now(), ...todo }, ...prev];
    });
  };

  const updateTodo = (id, desc) => {
    setTodos((prev) =>
      prev?.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, todo: desc } : prevTodo
      )
    );
  };

  const deleteTodo = (id) => {
    console.log("in delete : ", id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev?.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />{" "}
          </div>
          <div className="flex flex-col flex-wrap gap-y-3">
            {todos?.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
