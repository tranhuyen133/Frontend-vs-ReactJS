import { log } from 'console';
import React, { Component } from 'react';

// Kiểu dữ liệu của Props
interface PropsType {
  content: string;
}

// Kiểu dữ liệu của State
interface StateType {
  items: string[];
  check: boolean;
}

class Header extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      items: ["item1", "item2", "item3"],
      check: true
    };
  }

  click = () => {
    console.log("Clicked");
    this.setState({
      check: !this.state.check
    });
  };
  
  componentDidMount(): void {
      console.log("Component duoc gan vao giao dien");
      
  }
  componentDidUpdate(): void {
      console.log("Component duoc cap nhat");
      
  }
  componentWillUnmount(): void {
      console.log("component duoc go khoi giao dien");
      
  }
  render() {
    return (
      <>
        {/* Khi click sẽ toggle check */}
        <h3 onClick={this.click}>{this.props.content}</h3>

        {/* Dùng state.check để điều khiển hiển thị */}
        {this.state.check && (
          <ul>
            {this.state.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Header;
