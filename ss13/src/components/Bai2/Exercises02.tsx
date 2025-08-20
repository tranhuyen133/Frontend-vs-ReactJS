import React, { Component } from "react";

// Định nghĩa kiểu dữ liệu cho state
interface IState {
  id: string;
  name: string;
  dob: string;
  address: string;
}

export default class Exercise02 extends Component<{}, IState> {

  state: IState = {
    id: "1",
    name: "xinh dep nhat qua dat",
    dob: "13/03/2005",
    address: "Hà Nội, Việt Nam"
  };

  render() {
    return (
      <div style={{ padding: "20px", fontSize: "18px" }}>
        <h2>Thông tin cá nhân</h2>
        <p><b>Mã số:</b> {this.state.id}</p>
        <p><b>Họ tên:</b> {this.state.name}</p>
        <p><b>Ngày sinh:</b> {this.state.dob}</p>
        <p><b>Địa chỉ:</b> {this.state.address}</p>
      </div>
    );
  }
}
