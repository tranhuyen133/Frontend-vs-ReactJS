import React, { useState, useRef, useEffect } from "react";

const RenderCounter: React.FC = () => {
  // State để nhập giá trị từ input
  const [value, setValue] = useState<string>("");

  // useRef để đếm số lần render (không gây re-render khi thay đổi)
  const renderCount = useRef<number>(0);

  // Mỗi lần component render lại thì tăng biến đếm
  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div className="max-w-md mx-auto mt-8 p-6 rounded-2xl shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4 text-center">Render Counter</h2>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Nhập gì đó..."
        className="w-full border rounded-lg px-3 py-2 mb-4"
      />

      <p className="text-lg text-center">
        Số lần component render: <strong>{renderCount.current}</strong>
      </p>
    </div>
  );
};

export default RenderCounter;
