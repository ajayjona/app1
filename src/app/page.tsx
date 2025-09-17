"use client";
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setinput] = useState<string>("");
  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      title: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setinput("");
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">notebook</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-l"
          placeholder="add a task..."
        />
        <button
          onClick={addTodo}
          className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
        >
          add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded"
          >
            <span
              className={todo.completed ? "line-through text-gray-500" : ""}
            >
              {todo.text}
            </span>
            <div>
              <button
                onClick={() => toggleComplete(todo.id)}
                className="text-green-500 hover:text-green-700 mr-2"
              >
                {todo.completed ? "undo" : "done"}
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700"
              >
                delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
