import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './studentSlice';

export const store = configureStore({
  reducer: {
    student: studentReducer,
  },
});

// type hỗ trợ
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
