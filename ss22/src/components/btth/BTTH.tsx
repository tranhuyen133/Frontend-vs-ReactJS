import React, { useState } from "react";
// Import Bootstrap và Bootstrap Icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  const [error, setError] = useState("");

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      setError("Nội dung công việc không được để trống!");
      return;
    }
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText("");
    setError("");
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

  const updateTodo = (id: number) => {
    if (!editText.trim()) {
      setError("Nội dung công việc không được để trống!");
      return;
    }
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setEditId(null);
    setEditText("");
    setError("");
  };

  const completed = todos.filter((t) => t.completed).length;

  return (
   <div className="d-flex justify-content-center align-items-center vh-100">
  <div style={{ maxWidth: "550px", width: "100%" }}>
    <div className="card shadow-sm border-0 d-flex justify-content-between  ">
      <div className="card-body">
        <h3 className="text-center mb-3 fw-bold">Danh sách công việc</h3>

            {/* Form thêm công việc */}
            <form onSubmit={addTodo} className="d-flex mb-2 gap-2">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Nhập công việc..."
                className="form-control"
              />
              <button type="submit" className="btn btn-primary px-4">
                <i className="bi bi-plus-circle me-1"></i> Thêm
              </button>
            </form>
            {error && <p className="text-danger small">{error}</p>}

            {/* Danh sách công việc */}
            <ul className="list-group">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="list-group-item d-flex justify-content-between align-items-center py-2"
                >
                  <div className="d-flex align-items-center gap-2 flex-grow-1">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={todo.completed}
                      onChange={() => toggleComplete(todo.id)}
                    />
                    {editId === todo.id ? (
                      <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="form-control form-control-sm"
                      />
                    ) : (
                      <span
                        className={`${
                          todo.completed
                            ? "text-decoration-line-through text-muted"
                            : ""
                        }`}
                      >
                        {todo.text}
                      </span>
                    )}
                  </div>
                  <div className="d-flex gap-2">
                    {editId === todo.id ? (
                      <button
                        onClick={() => updateTodo(todo.id)}
                        className="btn btn-link text-success p-0"
                      >
                        <i className="bi bi-check-circle-fill fs-5"></i>
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setEditId(todo.id);
                          setEditText(todo.text);
                        }}
                        className="btn btn-link text-primary p-0"
                      >
                        <i className="bi bi-pencil-square fs-5"></i>
                      </button>
                    )}
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="btn btn-link text-danger p-0"
                    >
                      <i className="bi bi-trash-fill fs-5"></i>
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Đếm công việc */}
            <p className="text-success text-center mt-3 fw-semibold">
              {completed} / {todos.length} công việc đã hoàn thành
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
