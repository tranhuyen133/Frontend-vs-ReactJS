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
      </Routes>
    </Router>
  )
}

export default App
