import React, { Component } from "react";
import Children_Comp from "./Children_Comp";

interface IState {
  name: string;
}

export default class Parent_Comp extends Component<{}, IState> {
  state: IState = {
    name: "pho bo ngon nhat vu tru "
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Đây là Component Cha</h2>
        {/* Truyền state xuống cho component con qua props */}
        <Children_Comp name={this.state.name} />
      </div>
    );
  }
}
