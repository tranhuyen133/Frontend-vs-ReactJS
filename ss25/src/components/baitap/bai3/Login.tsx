import React from "react";

function Login() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Đăng nhập</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "250px",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          placeholder="Tên đăng nhập"
          style={{ marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          style={{ marginBottom: "10px", padding: "8px" }}
        />
        <button
          type="submit"
          style={{
            padding: "8px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}

export default Login;
