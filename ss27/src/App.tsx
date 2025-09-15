import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import About from "./components/baitap/bai1/About"
import Contact from "./components/baitap/bai1/Contact"
import Home from "./components/baitap/bai1/Home"
import ProductList from "./components/baitap/bai2/ProductList"
import ProductDetail from "./components/baitap/bai2/ProductDetail"
import TaskList from "./components/baitap/bai3/TaskList"
import TaskDetail from "./components/baitap/bai3/TaskDetail"
import ListProduct from "./components/baitap/bai4/ListProduct"
import Posts from "./components/baitap/bai5/Posts"
import PostDetail from "./components/baitap/bai5/PostDetail"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/task/:id" element={<TaskDetail />} />
        <Route path="/productlist" element={<ListProduct/>}></Route>
         <Route index element={<Navigate to="posts" replace />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  )
}

export default App
