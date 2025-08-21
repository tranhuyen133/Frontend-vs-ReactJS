import React, { Component } from 'react'

export default class Exersice01 extends Component<{}, { userName: string }>  {
  constructor(props: {}) {
    super(props);
    this.state = { userName: "xinh dep nhat qua dat" };
  }
  render() {
    return (
      <div>
        <h5>Xin chào, {this.state.userName}!</h5>;
      </div>
    )
  }
}
