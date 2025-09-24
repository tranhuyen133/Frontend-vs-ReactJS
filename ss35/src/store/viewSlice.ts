// src/store/viewSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface ViewState {
  mode: "list" | "grid";
}

const initialState: ViewState = {
  mode: "list",
};

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    setListMode: (state) => {
      state.mode = "list";
    },
    setGridMode: (state) => {
      state.mode = "grid";
    },
  },
});

export const { setListMode, setGridMode } = viewSlice.actions;
export default viewSlice.reducer;
