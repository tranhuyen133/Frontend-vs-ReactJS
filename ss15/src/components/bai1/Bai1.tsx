import React, { Component } from "react";

interface StateType {
  email: string;
}

export default class FormEmail extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: "" // Khởi tạo state trống
    };
  }

  // Hàm xử lý khi input thay đổi
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };

  // Hàm xử lý khi submit form
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Ngăn reload trang
    console.log("Email của bạn:", this.state.email);
    console.log("Email đã nhập: " + this.state.email);
  };

  render() {
    return (
      <div>
        <h3>Lấy giá trị từ Form</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Email: </label>
          {/* Controlled input: value lấy từ state */}
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Nhập email của bạn"
          />
          <button type="submit">Submit</button>
        </form>

        {/* Hiển thị email hiện tại */}
        <p>Email hiện tại: {this.state.email}</p>
      </div>
    );
  }
}
