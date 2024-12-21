import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Learning Dev</h1>
      <div className="max-w-3xl mx-auto">
        <AddTodo />
        <Todo />
      </div>
    </div>
  );
}

export default App;
