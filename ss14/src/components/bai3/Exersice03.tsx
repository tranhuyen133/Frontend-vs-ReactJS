import React, { Component } from 'react'

export default class Exersice03 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userName: "Trước khi click"
    };
  }
   handleChangeName = () => {
    this.setState({
      userName: "Sau khi click"
    });
  };
  render() {
    
    return (
      <div>
        <h1> {this.state.userName}!</h1>
        <button onClick={this.handleChangeName}>Click me</button>
      </div>
    )
  }
}
