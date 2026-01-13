import { useEffect, useState } from "react";
import "./Todo.css";

function Todo() {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: task,
      createdAt: new Date().toLocaleString(),
      deadline,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTask("");
    setDeadline("");
  };

  const markDone = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const undoTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: false } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const pendingTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="todo-container">
      <h1>To-Do App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <button>Add</button>
      </form>

      <h2>Pending Tasks</h2>
      <ul>
        {pendingTodos.map((todo) => (
          <li key={todo.id}>
            <div>
              <strong>{todo.text}</strong>
              <p>Created: {todo.createdAt}</p>
              {todo.deadline && <p>Deadline: {todo.deadline}</p>}
            </div>

            <div className="actions">
              <button onClick={() => markDone(todo.id)}>Done</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      <h2>Completed Tasks</h2>
      <ul>
        {completedTodos.map((todo) => (
          <li key={todo.id}>
            <div>
              <strong>{todo.text}</strong>
              <p>Completed</p>
            </div>

            <div className="actions">
              <button onClick={() => undoTodo(todo.id)}>Undo</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
