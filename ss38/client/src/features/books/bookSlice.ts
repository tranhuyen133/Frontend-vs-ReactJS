// src/features/books/bookSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Book } from "../../components/types";
import * as api from "./bookAPI";

interface BookState {
  items: Book[];
  loading: boolean;
  error?: string;
}

const initialState: BookState = {
  items: [],
  loading: false,
};

// Thunk
export const getBooks = createAsyncThunk("books/getBooks", async () => {
  const res = await api.fetchBooks();
  return res.data;
});

export const createBook = createAsyncThunk("books/createBook", async (book: Omit<Book, "id">) => {
  const res = await api.addBook(book);
  return res.data;
});

export const editBook = createAsyncThunk("books/editBook", async (book: Book) => {
  const res = await api.updateBook(book);
  return res.data;
});

export const removeBook = createAsyncThunk("books/removeBook", async (id: string) => {
  await api.deleteBook(id);
  return id;
});

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(getBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // CREATE
      .addCase(createBook.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // UPDATE
      .addCase(editBook.fulfilled, (state, action) => {
        state.items = state.items.map((b) => (b.id === action.payload.id ? action.payload : b));
      })
      // DELETE
      .addCase(removeBook.fulfilled, (state, action) => {
        state.items = state.items.filter((b) => b.id !== action.payload);
      });
  },
});

export default bookSlice.reducer;
