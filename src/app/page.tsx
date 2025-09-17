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
      <h1 className="text-2xl  text-black  font-bold mb-4">Notes</h1>
      <div className="flex mb-4 gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="add a task..."
        />
        <button
          onClick={addTodo}
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between text-black items-center mb-2 p-2 bg-gray-100 rounded"
          >
            <span
              className={todo.completed ? "line-through text-gray-500" : ""}
            >
              {todo.title}
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
