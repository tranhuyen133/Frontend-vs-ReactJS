import React from "react";
import ListCourse from "./components/Bai1/ListCourse";
import Calculation from "./components/Bai2/Calculation";
import UserInfo from "./components/Bai3/UserInfo";
import ColorBox from "./components/Bai4/ColorBox";
import FormatName from "./components/Bai5/FormatName";

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
