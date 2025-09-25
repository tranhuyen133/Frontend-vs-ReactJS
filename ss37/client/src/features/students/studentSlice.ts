import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { Student } from "./types";

const API_URL = "http://localhost:8080/students";

// Thunk: call API
export const fetchStudents = createAsyncThunk("students/fetchAll", async () => {
  const res = await axios.get<Student[]>(API_URL);
  return res.data;
});

export const addStudent = createAsyncThunk(
  "students/add",
  async (student: Omit<Student, "id">) => {
    const res = await axios.post<Student>(API_URL, student);
    return res.data;
  }
);

export const updateStudent = createAsyncThunk(
  "students/update",
  async (student: Student) => {
    const res = await axios.put<Student>(`${API_URL}/${student.id}`, student);
    return res.data;
  }
);

export const deleteStudent = createAsyncThunk(
  "students/delete",
  async (id: string | number) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

interface StudentState {
  list: Student[];
  loading: boolean;
  error: string | null;
}

const initialState: StudentState = {
  list: [],
  loading: false,
  error: null,
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Lỗi load dữ liệu";
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        const idx = state.list.findIndex((s) => s.id === action.payload.id);
        if (idx >= 0) state.list[idx] = action.payload;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.list = state.list.filter((s) => s.id !== action.payload);
      });
  },
});

export default studentSlice.reducer;
