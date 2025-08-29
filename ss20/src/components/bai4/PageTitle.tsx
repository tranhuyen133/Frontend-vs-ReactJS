import React, { useState, useEffect } from "react";

function PageTitle() {
  const [name, setName] = useState("");

  // Cập nhật tiêu đề trang mỗi khi name thay đổi
  useEffect(() => {
    if (name) {
      document.title = `Xin chào, ${name}`;
    } else {
      document.title = "Trang React";
    }
  }, [name]); // chạy lại khi state name thay đổi

  return (
    <div>
      <h2>Nhập tên để thay đổi tiêu đề trang</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nhập tên của bạn..."
      />
      <p>Tên hiện tại: {name}</p>
    </div>
  );
}

export default PageTitle;
