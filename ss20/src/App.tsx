import React from 'react'
import UserProfile from './components/bai2/UserProfile'
import Welcome from './components/bai3/Welcome'
import PageTitle from './components/bai4/PageTitle'
import InputChecker from './components/bai1/InputChecker'
import Timer from './components/bai5/Timer'

function App() {
  return (
    <div>
      <InputChecker></InputChecker>
      <UserProfile></UserProfile>
      <Welcome></Welcome>
      <PageTitle></PageTitle>
      <Timer></Timer>
    </div>
  )
}

export default App
