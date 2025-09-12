import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <h1>Chào mừng bạn đến với ứng dụng giới thiệu bản thân của tôi!</h1>
    </div>
  )
}

export default Home
