import { useState } from "react";

function Bai1() {
     const [name] = useState("Nguyen Van A");
  return (
    <div>
       <h5>Ho va ten {name} </h5>
    </div>
  )
}

export default Bai1
