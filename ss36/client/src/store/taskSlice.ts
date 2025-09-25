import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Task {
  id: number;
  taskName: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
}

interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

// Lấy danh sách công việc
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const res = await axios.get<Task[]>("http://localhost:8080/tasks");
  return res.data;
});

// Thêm công việc
export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (newTask: Omit<Task, "id">) => {
    const res = await axios.post<Task>("http://localhost:8080/tasks", newTask);
    return res.data;
  }
);

// Xóa công việc
export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id: number) => {
    await axios.delete(`http://localhost:8080/tasks/${id}`);
    return id;
  }
);

// Cập nhật trạng thái 
export const toggleTask = createAsyncThunk(
  "tasks/toggleTask",
  async (task: Task) => {
    const updated = { ...task, completed: !task.completed };
    const res = await axios.put<Task>(`http://localhost:8080/tasks/${task.id}`, updated);
    return res.data;
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Lỗi tải dữ liệu";
      })

      .addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.tasks.push(action.payload);
      })

      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<number>) => {
        state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      })

      .addCase(toggleTask.fulfilled, (state, action: PayloadAction<Task>) => {
        const index = state.tasks.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      });
  },
});

export default taskSlice.reducer;
