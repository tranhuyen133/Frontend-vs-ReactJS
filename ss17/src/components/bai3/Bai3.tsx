import { useState } from "react";

function ChangeColor() {
  // Tạo state cho màu, mặc định là black
  const [color, setColor] = useState("black");

  // Hàm thay đổi màu
  const handleChangeColor = () => {
    setColor((prevColor) => (prevColor === "black" ? "red" : "black"));
  };

  return (
    <div>
      <h3 style={{ color: color }}>Xin chào, mình là React!</h3>
      <button onClick={handleChangeColor}>Đổi màu chữ</button>
    </div>
  );
}

export default ChangeColor;
