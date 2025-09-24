// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import counterReducer from "./counterSlice";
import numberReducer from "./numberSlice";
import viewReducer from "./viewSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    number: numberReducer,
    theme: themeReducer, 
    view: viewReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
