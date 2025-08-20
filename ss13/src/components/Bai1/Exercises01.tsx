import React, { Component } from 'react'

export default class Exercises01 extends Component {
  state = { name: "nguoi dep hat nhai" }

  render() {
    return (
      <div>
        <p>Tôi tên là: <b>{this.state.name}</b></p>
      </div>
    )
  }
}
