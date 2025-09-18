import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import counterReducer from "./counterSlice";
import randomReducer from "./randomSlice";
import companyReducer from "./companySlice";
import themeReducer from "./themeSlice";   

export const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
    random: randomReducer,
    company: companyReducer,
    theme: themeReducer,   
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
