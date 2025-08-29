import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Timer bắt đầu chạy...");

    // Tạo interval: mỗi giây tăng count lên 1
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // Cleanup: dọn dẹp interval khi component unmount
    return () => {
      clearInterval(intervalId);
      console.log(" Timer đã được dọn dẹp!");
    };
  }, []); // chỉ chạy 1 lần khi mount

  return (
    <div>
      <h2>Bộ đếm thời gian</h2>
      <p>Giá trị: {count}</p>
    </div>
  );
}

export default Timer;
