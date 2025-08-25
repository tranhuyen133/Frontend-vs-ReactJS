import React, { Component } from 'react'
import "./LoginStatus.css"
interface StateType{
    isLogginIn: boolean;
}
export default class LoginStatus extends Component<object, StateType> {
    constructor(props:object){
        super(props);
        this.state ={
            isLogginIn : false,
        };
    }
    toggleLogin = () =>{
        this.setState ({ isLogginIn: !this.state.isLogginIn});
    }

  render() {
    return (
      <div className='login-container'>
        <p className='login-message'>
            {this.state.isLogginIn ? "Xin chao,User" :"Vui long dang nhap de tiep tuc"}
        </p>
        <button className='loginbutton'onClick={this.toggleLogin}> {this.state.isLogginIn ? "Dang xuat":"Dang nhap"}</button>
        
      </div>
    )
  }
}
