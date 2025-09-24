import { createSlice } from "@reduxjs/toolkit";

interface NumberState {
  numbers: number[];
}

const initialState: NumberState = {
  numbers: [],
};

const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    addRandomNumbers: (state) => {
      // Tạo mảng số ngẫu nhiên (5 số từ 1 -> 10)
      const randomArray = Array.from({ length: 4 }, () =>
        Math.floor(Math.random() * 10) + 1
      );
      state.numbers = randomArray;
    },
  },
});

export const { addRandomNumbers } = numberSlice.actions;
export default numberSlice.reducer;
