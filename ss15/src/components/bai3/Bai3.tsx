import React, { useState } from "react";

export default function FormDate() {
  // State để quản lý giá trị của input date
  const [birthDate, setBirthDate] = useState("");
  const [submittedDate, setSubmittedDate] = useState<string | null>(null);

  // Hàm xử lý khi Submit form
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Ngăn reload trang
    console.log("Ngày sinh đã chọn:", birthDate);
    setSubmittedDate(birthDate); // Lưu ngày đã submit
  };

  return (
    <div>
      <h3>Lấy giá trị từ Form (input type date)</h3>
      <form onSubmit={handleSubmit}>
        <label>Ngày sinh: </label>
        {/* Controlled input: value lấy từ state */}
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Hiển thị trước khi submit */}
      <p>Ngày sinh hiện tại (chưa submit): {birthDate}</p>

      {/* Hiển thị sau khi submit */}
      {submittedDate && (
        <div>
          <p>Ngày sinh đã chọn: {submittedDate}</p>
        </div>
      )}
    </div>
  );
}
