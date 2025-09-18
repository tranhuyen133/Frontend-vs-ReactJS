import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@store/store";
const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", width: "300px" }}>
      <h2>Thông tin người dùng</h2>
      <p><b>ID:</b> {user.id}</p>
      <p><b>Tên:</b> {user.userName}</p>
      <p><b>Giới tính:</b> {user.gender}</p>
      <p><b>Ngày sinh:</b> {user.dateBirth}</p>
      <p><b>Địa chỉ:</b> {user.address}</p>
    </div>
  );
};

export default Profile;
