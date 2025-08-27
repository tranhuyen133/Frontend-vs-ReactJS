import React, { useReducer } from "react";

// 1. Định nghĩa kiểu cho state
interface State {
  count: number;
}

// 2. Định nghĩa kiểu cho action
type Action = { type: "INCREASE" };

// 3. Viết reducer function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 }; // tăng count lên 1
    default:
      return state;
  }
}

// 4. Component Increase
function Increase() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>Giá trị hiện tại: {state.count}</h1>
      
      <button onClick={() => dispatch({ type: "INCREASE" })} >Increase</button>
    </div>
  );
}

export default Increase;
