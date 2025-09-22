import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Student } from "./types";

interface StudentState {
  students: Student[];
}

const initialState: StudentState = {
  students: [
    {
      id: "SV001",
      fullName: "Nguyễn Văn A",
      age: 20,
      gender: true,
      dateOfBirth: "2005-03-13",
      placeOfBirth: "Hà Nội",
      address: "Ba Đình - Hà Nội",
    },
    {
      id: "SV002",
      fullName: "Trần Thị B",
      age: 21,
      gender: false,
      dateOfBirth: "2004-07-10",
      placeOfBirth: "Đà Nẵng",
      address: "Hải Châu - Đà Nẵng",
    },
  ],
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action: PayloadAction<Student>) => {
      state.students.push(action.payload);
    },
    updateStudent: (state, action: PayloadAction<Student>) => {
      const index = state.students.findIndex((s) => s.id === action.payload.id);
      if (index !== -1) state.students[index] = action.payload;
    },
    deleteStudent: (state, action: PayloadAction<string>) => {
      state.students = state.students.filter((s) => s.id !== action.payload);
    },
  },
});

export const { addStudent, updateStudent, deleteStudent } =
  studentSlice.actions;
export default studentSlice.reducer;
