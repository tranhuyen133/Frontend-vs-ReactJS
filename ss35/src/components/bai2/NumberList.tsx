import { useDispatch, useSelector } from "react-redux";
import { addRandomNumbers } from "../../store/numberSlice";
import type { AppDispatch, RootState } from "../../store/store";


const NumberList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const numbers = useSelector((state: RootState) => state.number.numbers);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>List number: [{numbers.join(",")}]</h2>
      <button onClick={() => dispatch(addRandomNumbers())}>
        Random number
      </button>
    </div>
  );
};

export default NumberList;
