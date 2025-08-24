import React, { useState } from "react";

export default function FormColor() {
  // State để quản lý giá trị của input color
  const [color, setColor] = useState("#000000"); // mặc định màu đen
  const [submittedColor, setSubmittedColor] = useState<string | null>(null);

  // Hàm xử lý khi Submit form
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Ngăn reload trang
    console.log("Mã màu đã chọn:", color);
    setSubmittedColor(color); // Lưu lại màu đã submit
  };

  return (
    <div>
      <h3>Lấy giá trị từ Form (input type color)</h3>
      <form onSubmit={handleSubmit}>
        <label>Chọn màu: </label>
        {/* Controlled input: value lấy từ state */}
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Hiển thị trước khi submit */}
      <p>Màu hiện tại (chưa submit): {color}</p>

      {/* Hiển thị sau khi submit */}
      {submittedColor && (
        <div>
          <p>Màu đã chọn: {submittedColor}</p>
          <div
            style={{
              width: "100px",
              height: "50px",
              backgroundColor: submittedColor,
              border: "1px solid #333",
              marginTop: "10px"
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
