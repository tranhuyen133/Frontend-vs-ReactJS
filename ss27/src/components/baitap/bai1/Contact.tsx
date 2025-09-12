import { Link } from "react-router-dom"

function Contact() {
  return (
    <div>
      {/* Navbar */}
      <nav style={{ display: "flex", gap: "20px", padding: "10px", }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Nội dung */}
      <h2>Liên hệ</h2>
      <p><b>Email:</b> nguyenvana@example.com</p>
      <p><b>Số điện thoại:</b> 0123 456 789</p>
      <p>
        <b>Mạng xã hội:</b> 
        <a href="https://facebook.com/nguyenvana" target="_blank" rel="noreferrer"> Facebook</a>
      </p>
    </div>
  )
}

export default Contact
