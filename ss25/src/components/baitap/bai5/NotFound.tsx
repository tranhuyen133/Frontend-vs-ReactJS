import React from "react";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 style={{ fontSize: "80px", marginBottom: "20px", color: "red" }}>
        404
      </h1>
      <h2>Trang bạn tìm không tồn tại!</h2>
      <p style={{ marginTop: "10px" }}>
        Vui lòng kiểm tra lại đường dẫn hoặc quay về trang chủ.
      </p>
    </div>
  );
}

export default NotFound;
