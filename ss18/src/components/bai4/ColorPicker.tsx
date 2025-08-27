import React, { useState, useCallback } from "react";

const ColorPicker: React.FC = () => {
  // State lưu trữ màu đã chọn (mặc định: trắng)
  const [color, setColor] = useState<string>("#ffffff");

  // useCallback để tối ưu hàm thay đổi màu
  const handleChangeColor = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setColor(event.target.value);
    },
    []
  );

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Chọn màu:</h2>
      {/* Input chọn màu */}
      <input type="color" value={color} onChange={handleChangeColor} />
      
      <p>Màu bạn đã chọn: <b>{color}</b></p>

      {/* Ô hiển thị màu */}
      <div
        style={{
          margin: "20px auto",
          width: "200px",
          height: "200px",
          backgroundColor: color,
          border: "2px solid #333",
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
};

export default ColorPicker;
