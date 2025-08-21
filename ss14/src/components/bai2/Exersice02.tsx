import React, { Component } from "react";

class Notification extends Component {
  // Hàm render hiển thị ra giao diện
  render() {
    return (
      <div>
        <h1>Xin chào, đây là Notification Component</h1>
      </div>
    );
  }

  // Hàm vòng đời: chạy 1 lần duy nhất sau khi component được mount
  componentDidMount() {
    console.log("Component đã được mount!");
  }
}

export default Notification;
