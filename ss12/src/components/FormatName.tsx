import React from "react";

// Định nghĩa kiểu dữ liệu cho user
type User = {
  firstName: string;
  lastName: string;
};

function FormatName() {
  // Đối tượng user
  const user: User = {
    firstName: "Nguyễn Văn",
    lastName: "Nam",
  };

  // Hàm format tên
  const formatName = (user: User): string => {
    return `${user.firstName} ${user.lastName}`;
  };

  return (
    <div>
      <h2>Thông tin người dùng</h2>
      <p>Họ và tên: {formatName(user)}</p>
    </div>
  );
}

export default FormatName;
