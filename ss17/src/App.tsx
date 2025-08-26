import React, { Component } from 'react';
import Bai1 from './components/bai1/Bai1';
import Bai2 from './components/bai2/Bai2'
import Bai3 from './components/bai3/Bai3'
import Bai4 from './components/bai4/Bai4'

class App extends Component {
  render() {
    return (
      <div>
        <Bai1></Bai1>
        <Bai2></Bai2>
        <Bai3></Bai3>
        <Bai4></Bai4>
      </div>
    );
  }
}

export default App;