import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", role: "" });

  const userData = { email: "admin@gmail.com", password: "123456", role: "admin" };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      form.email === userData.email &&
      form.password === userData.password &&
      form.role === userData.role
    ) {
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/account");
    } else {
      alert("Sai thông tin đăng nhập!");
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <br />
        <input name="password" type="password" placeholder="Mật khẩu" value={form.password} onChange={handleChange} />
        <br />
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="">--Chọn quyền--</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <br />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}

export default Login;
