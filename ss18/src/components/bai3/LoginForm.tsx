import React, { useState, useCallback } from "react";

function LoginForm() {
  // State lưu email và password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hàm handleSubmit tối ưu với useCallback
  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); // Ngăn reload trang
      console.log("Email:", email);
      console.log("Password:", password);
    },
    [email, password] // phụ thuộc vào state email, password
  );

  return (
    <div style={{ margin: "20px" }}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Email: </label>
          <input
            type="email"
            placeholder="Nhập email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password: </label>
          <input
            type="password"
            placeholder="Nhập password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
