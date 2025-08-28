import React, { Component } from 'react'
import Bai5 from './components/bai5/bai5'
import ShoppingCart from './components/bai1/ShoppingCart'
import RenderCounter from './components/bai3/RenderCounter'

export default class App extends Component {
  render() {
    return (
      <div>
        <ShoppingCart></ShoppingCart>
        <Bai2></Bai2>
        <RenderCounter></RenderCounter>
        <Bai5></Bai5>
      </div>
    )
  }
}
