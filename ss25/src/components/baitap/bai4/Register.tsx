import React from "react";

function Register() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Đăng ký</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          placeholder="Tên đăng nhập"
          style={{ marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="email"
          placeholder="Email"
          style={{ marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          style={{ marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="password"
          placeholder="Nhập lại mật khẩu"
          style={{ marginBottom: "10px", padding: "8px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
}

export default Register;
