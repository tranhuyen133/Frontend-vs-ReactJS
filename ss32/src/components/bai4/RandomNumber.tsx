import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { addRandomNumber } from "../store/randomSlice";

const RandomNumber: React.FC = () => {
  const numbers = useSelector((state: RootState) => state.random.numbers);
  const dispatch = useDispatch();

  const generateNumber = () => {
    const random = Math.floor(Math.random() * 100); // số ngẫu nhiên 0–99
    dispatch(addRandomNumber(random));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>{JSON.stringify(numbers)}</h2>
      <button onClick={generateNumber}>Generate Random Number</button>
    </div>
  );
};

export default RandomNumber;
