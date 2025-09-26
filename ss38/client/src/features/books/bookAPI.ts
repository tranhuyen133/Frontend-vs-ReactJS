import axios from "axios";
import type { Book } from "../../components/types";

const API_URL = "http://localhost:8080/books";

export const fetchBooks = () => axios.get<Book[]>(API_URL);
export const addBook = (book: Omit<Book, "id">) => axios.post<Book>(API_URL, book);
export const updateBook = (book: Book) => axios.put<Book>(`${API_URL}/${book.id}`, book);
export const deleteBook = (id: string) => axios.delete(`${API_URL}/${id}`);
