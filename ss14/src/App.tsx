import React, { Component } from 'react'
import Exersice01 from './components/bai1/Exersice01'
import Exersice03 from './components/bai3/Exersice03'
import Exersice04 from './components/bai4/Exersice04'
export default class App extends Component {
  render() {
    return (
      <div>
        <Exersice01></Exersice01>
        <Exersice03></Exersice03>
        <Exersice04></Exersice04>
      </div>
    )
  }
}
