import React, { Component } from 'react'
import SubjectList from './components/bai1/SubjectList'
import LoginStatus from './components/bai2/LoginStatus'
import Button from './components/bai3/Button'
import ClickCounter from './components/bai4/ClickCounter'
import UserForm from './components/bai5/UserForm'
export default class App extends Component {
  render() {
    return (
      <div>
        <SubjectList></SubjectList>
        <LoginStatus></LoginStatus>
      <Button></Button>
    <ClickCounter></ClickCounter>
    <UserForm></UserForm>
      </div>
    )
  }
}
