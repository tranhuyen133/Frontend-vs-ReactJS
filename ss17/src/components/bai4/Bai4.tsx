import { useState } from "react";

function Toggle() {
  // Tạo state để quản lý trạng thái hiển thị
  const [isVisible, setIsVisible] = useState(true);

  // Hàm thay đổi trạng thái
  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      {isVisible && <h3>Xin chào, mình là React!</h3>}
      
      <button onClick={handleToggle}>
        {isVisible ? "Ẩn tiêu đề" : "Hiện tiêu đề"}
      </button>
    </div>
  );
}

export default Toggle;
