import React from 'react'
import DemoUseReducer from './components/DemoUseReducer'
import Increase from './components/bai1/Increase'
import UserList from './components/bai2/UserList'
import LoginForm from './components/bai3/LoginForm'
import ColorPicker from './components/bai4/ColorPicker'
function App() {
  return (
    <div>
      <DemoUseReducer></DemoUseReducer>
      <Increase></Increase>
      <UserList></UserList>
      <LoginForm></LoginForm>
      <ColorPicker></ColorPicker>
    </div>
  )
}

export default App
