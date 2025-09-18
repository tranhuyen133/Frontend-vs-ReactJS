import React from "react";
import Profile from "./components/bai1/Profile";
import ListUser from "./components/bai2/ListUser";
import Counter from "./components/bai3/Counter";
import RandomNumber from "./components/bai4/RandomNumber";
import ChangeState from "./components/bai5/ChangeState";
import ThemeToggle from "./components/ThemeToggle";


function App() {
  return (
    <div>

      <Profile />
      <ListUser></ListUser>
      <Counter></Counter>
      <RandomNumber></RandomNumber>
      <ChangeState></ChangeState>
      <ThemeToggle></ThemeToggle>
    </div>
  );
}

export default App;
