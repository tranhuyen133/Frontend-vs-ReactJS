import { createSlice, type PayloadAction,  } from "@reduxjs/toolkit";

interface RandomState {
  numbers: number[];
}

const initialState: RandomState = {
  numbers: [],
};

const randomSlice = createSlice({
  name: "random",
  initialState,
  reducers: {
    addRandomNumber: (state, action: PayloadAction<number>) => {
      state.numbers.push(action.payload);
    },
  },
});

export const { addRandomNumber } = randomSlice.actions;
export default randomSlice.reducer;
