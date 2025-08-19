import React from "react";
import ListCourse from "./components/ListCourse";
import Calculation from "./components/Calculation";
import UserInfo from "./components/UserInfo";
import ColorBox from "./components/ColorBox";
import FormatName from "./components/FormatName";

function App() {
  return (
    <div>
      <h3>Bai1</h3>
      <ListCourse />
       <h3>Bai2</h3>
      <Calculation />
       <h3>Bai3</h3>
      <UserInfo />
       <div style={{ display: "flex", justifyContent: "center" }}>
      <ColorBox color="red" />
      <ColorBox color="blue" />
      <ColorBox color="green" />
    </div>
     <h3>Bai5</h3>
      <FormatName />
    </div>
  );
}

export default App;
