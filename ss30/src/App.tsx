import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Input,
  List,
  Spin,
  Modal,
  message,
  Checkbox,
} from "antd";
import type { InputRef } from "antd";

import axios from "axios";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  deleted: boolean;   
}

const API_URL = "http://localhost:3000/todos";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);

  const inputRef = useRef<InputRef>(null);

  // 🔹 Fetch todos
  const getTodos = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setTodos(res.data);
    } catch (err) {
      message.error("Lỗi tải dữ liệu");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  //  Thêm công việc
  const addTodo = async () => {
    if (!text.trim()) {
      message.warning("Tên công việc không được để trống");
      return;
    }
    if (
      todos.some(
        (t) => t.text.toLowerCase() === text.trim().toLowerCase()
      )
    ) {
      message.warning("Tên công việc đã tồn tại");
      return;
    }
    const newTodo: Todo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      deleted: false,   //  mặc định chưa xóa
    };
    try {
      await axios.post(API_URL, newTodo);
      setTodos([...todos, newTodo]);
      setText("");
      inputRef.current?.focus();
      message.success("Thêm thành công");
    } catch {
      message.error("Lỗi thêm công việc");
    }
  };

  //  Xóa công việc (chỉ đánh dấu deleted)
  const confirmDelete = (id: number, text: string) => {
    Modal.confirm({
      title: "Xác nhận",
      content: `Bạn có chắc chắn muốn xóa công việc <${text}> không?`,
      okText: "Xóa",
      cancelText: "Hủy",
      onOk: async () => {
        try {
          const todo = todos.find((t) => t.id === id);
          if (!todo) return;

          const updated = { ...todo, deleted: true };  //  đánh dấu deleted
          await axios.put(`${API_URL}/${id}`, updated);

          setTodos(todos.map((t) => (t.id === id ? updated : t)));
          message.success("Đã đưa vào thùng rác");
        } catch {
          message.error("Lỗi khi xóa");
        }
      },
    });
  };

  // 🔹 Toggle trạng thái completed
  const toggleTodo = async (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;
    const updated = { ...todo, completed: !todo.completed };
    try {
      await axios.put(`${API_URL}/${id}`, updated);
      setTodos(todos.map((t) => (t.id === id ? updated : t)));
    } catch {
      message.error("Lỗi cập nhật trạng thái");
    }
  };

  // 🔹 Modal hoàn thành tất cả
  useEffect(() => {
    if (todos.length > 0 && todos.every((t) => t.completed)) {
      Modal.success({ content: "Hoàn thành công việc" });
    }
  }, [todos]);

  // 🔹 Mở modal sửa
  const openEdit = (todo: Todo) => {
    setCurrentTodo(todo);
    setIsEditOpen(true);
  };

  // 🔹 Cập nhật công việc
  const handleUpdate = async () => {
    if (!currentTodo?.text.trim()) {
      message.warning("Tên công việc không được để trống");
      return;
    }
    if (
      todos.some(
        (t) =>
          t.id !== currentTodo.id &&
          t.text.toLowerCase() === currentTodo.text.toLowerCase()
      )
    ) {
      message.warning("Tên công việc đã tồn tại");
      return;
    }
    try {
      await axios.put(`${API_URL}/${currentTodo.id}`, currentTodo);
      setTodos(
        todos.map((t) => (t.id === currentTodo.id ? currentTodo : t))
      );
      setIsEditOpen(false);
      message.success("Cập nhật thành công");
    } catch {
      message.error("Lỗi khi cập nhật");
    }
  };

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ color: "black" }}>Todo List</h1>

      {/* Loading overlay */}
      {loading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(255,255,255,0.7)",
            zIndex: 999,
          }}
        >
          <Spin size="large" />
        </div>
      )}

      {/* Input thêm */}
      <Input
        placeholder="Nhập tên công việc"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onPressEnter={addTodo}
        style={{ width: "70%", marginRight: 10 }}
        ref={inputRef}
      />
      <Button type="primary" onClick={addTodo}>
        Thêm
      </Button>

      {/* Danh sách công việc */}
      <List
        bordered
        style={{
          marginTop: 20,
          maxHeight: 250,
          overflowY: "auto",
        }}
        dataSource={todos.filter((t) => !t.deleted)}   // ✅ chỉ hiển thị chưa xóa
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button onClick={() => openEdit(item)}>Sửa</Button>,
              <Button
                danger
                onClick={() => confirmDelete(item.id, item.text)}
              >
                Xóa
              </Button>,
            ]}
          >
            <Checkbox
              checked={item.completed}
              onChange={() => toggleTodo(item.id)}
            >
              <span
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                {item.text}
              </span>
            </Checkbox>
          </List.Item>
        )}
      />

      {/* Modal sửa */}
      <Modal
        open={isEditOpen}
        onCancel={() => setIsEditOpen(false)}
        onOk={handleUpdate}
        okText="Cập nhật"
        cancelText="Hủy"
      >
        <Input
          value={currentTodo?.text}
          onChange={(e) =>
            setCurrentTodo({
              ...currentTodo!,
              text: e.target.value,
            })
          }
        />
      </Modal>
    </div>
  );
};

export default App;
