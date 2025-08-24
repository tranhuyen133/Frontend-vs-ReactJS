import React, { useState } from "react";

export default function FormRange() {
  // State để quản lý giá trị của range
  const [progress, setProgress] = useState(0);
  const [submittedProgress, setSubmittedProgress] = useState<number | null>(null);

  // Hàm xử lý khi Submit form
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Ngăn reload trang
    console.log("Tiến độ công việc:", progress + "%");
    setSubmittedProgress(progress); // Lưu lại giá trị đã submit
  };

  return (
    <div>
      <h3>Lấy giá trị từ Form (input type range)</h3>
      <form onSubmit={handleSubmit}>
        <label>Tiến độ công việc: </label>
        {/* Controlled input: value lấy từ state */}
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
        />
        <span> {progress}%</span>
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Hiển thị trước khi submit */}
      <p>Tiến độ hiện tại (chưa submit): {progress}%</p>

      {/* Hiển thị sau khi submit */}
      {submittedProgress !== null && (
        <div>
          <p>Tiến độ đã gửi: {submittedProgress}%</p>
        </div>
      )}
    </div>
  );
}
