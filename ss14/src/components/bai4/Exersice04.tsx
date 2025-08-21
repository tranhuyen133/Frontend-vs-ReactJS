import React, { Component } from "react";

type StateType = {
  message: string;
};

export default class Exersice04 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      message: "Học code để đi làm",
    };
  }

  // Chặn render lại khi state thay đổi
  shouldComponentUpdate(nextProps: {}, nextState: StateType) {
    console.log("nextState:", nextState);
    // Luôn trả về false => Không render lại giao diện
    return false;
  }

  handleChangeMessage = () => {
    this.setState({
      message: "Học code ",
    });
  };

  render() {
    console.log("Render được gọi!");
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleChangeMessage}>Thay đổi lời nhắn</button>
      </div>
    );
  }
}
