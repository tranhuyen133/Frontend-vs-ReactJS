import React from "react";

function UserInfo() {
  // Đối tượng user mô phỏng thông tin cá nhân
  const user = {
    name: "Nguyễn Văn A",
    age: 20,
    email: "nguyenvana@example.com",
    address: "Hà Nội, Việt Nam",
  };

  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <p>Họ tên: {user.name}</p>
      <p>Tuổi: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Địa chỉ: {user.address}</p>
    </div>
  );
}

export default UserInfo;
