import { Link } from "react-router-dom"

function About() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "20px", padding: "10px"}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <h2>Giới thiệu</h2>
      <p><b>Họ tên:</b> Nguyễn Văn A</p>
      <p><b>Nghề nghiệp:</b> Sinh viên CNTT</p>
      <p><b>Sở thích:</b> Lập trình, đọc sách, du lịch</p>
    </div>
  )
}

export default About
