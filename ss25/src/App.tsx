import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import HomePage from './components/baitap/bai1/HomePage'
import ContactPage from './components/baitap/bai2/ContactPage'
import Login from './components/baitap/bai3/Login'
import Register from './components/baitap/bai4/Register'
import NotFound from './components/baitap/bai5/NotFound'
import Detail from './components/baitap/bai6/Detail'
import Product from './components/baitap/bai6/Product'

function App() {
  return (
      <BrowserRouter>
      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/contact">contact</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
