// components/bai1/Counter.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, reset } from "../../store/counterSlice";
import type { RootState } from "../../store/store";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())} style={{ margin: "0 10px" }}>
        Decrease
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
