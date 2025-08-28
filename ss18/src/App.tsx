import { useEffect, useState } from "react"
import Footer from "./components/btth/Footer"
import Input from "./components/btth/Input"
import Item from "./components/btth/Item"
import Title from "./components/btth/Title"
import { type Todo } from "./types/todoTypes"

export default function App() {
  //Quản lý được input của người dùng
  //Tạo state để chứa input
  const [inputTodo, setInputTodo] = useState("")
  //Khởi tạo state quản lý 1 mảng công việc
  let [todos, setTodos] = useState<Todo[]>([])
  //Lấy dữ liệu từ localstorage khi vào trình duyệt   
  useEffect(() => {
    todos = JSON.parse(localStorage.getItem("todos") || "[]")
    setTodos(todos)
  }, [])
  //Hàm đặt lại state theo giá trị input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(e.target.value)
  }
  //Quản lý danh sách công việc
  //Xây dựng hàm thêm mới công việc
  function addTodo() {
    let newTodo: Todo = {
      id: Date.now(),
      content: inputTodo,
      isDone: false
    }
    todos.push(newTodo);
    setTodos([...todos])
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  //Hàm đánh dấu công việc hoàn thành
  function toggleTodo(id: number) {
    todos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone }
      }
      return todo
    })
    setTodos(todos)
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  //Hàm xóa công việc
  function deleteTodo(id: number) {
    todos = todos.filter((todo) => todo.id !== id)
    setTodos(todos)
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  return (
    <div className="container todo-container">
      <Title></Title>
      <Input input={inputTodo} handleChange={handleChange} addTodo={addTodo}></Input>
      <ul className="list-group my-3">
        {/* Tasks sẽ được thêm ở đây */}
        {todos.map((todo) => {
          return <Item key={todo.id}
            content={todo.content}
            isDone={todo.isDone}
            id={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}></Item>
        })}
      </ul>
      <Footer todos = {todos}></Footer>
    </div>

  )
}