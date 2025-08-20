import React, { Component } from "react";

// Định nghĩa interface cho User
interface IUser {
  id: number;
  name: string;
  address: string;
}

// Định nghĩa interface cho State
interface IState {
  users: IUser[];
}

export default class Exercise03 extends Component<{}, IState> {
  // Khởi tạo state với mảng users
  state: IState = {
    users: [
      { id: 1, name: "Nguyễn Văn A", address: "Hà Nội" },
      { id: 2, name: "Trần Thị B", address: "Đà Nẵng" },
      { id: 3, name: "Lê Văn C", address: "Hồ Chí Minh" }
    ]
  };

  render() {
    return (
      <div style={{ padding: "20px", fontSize: "18px" }}>
        <h2>Danh sách Users</h2>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>
              <b>ID:</b> {user.id} | <b>Tên:</b> {user.name} | <b>Địa chỉ:</b> {user.address}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
