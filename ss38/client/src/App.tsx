import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { getBooks, createBook, editBook, removeBook } from "./features/books/bookSlice";

import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import BookSearchSortFilter from "./components/BookSearchSortFilter";
import { Button, CircularProgress } from "@mui/material";

const App: React.FC = () => {
  // Khai báo dispatch để gọi action từ Redux
  const dispatch = useDispatch<AppDispatch>();

  // Lấy dữ liệu từ state.books trong Redux store
  const { items: books, loading } = useSelector((state: RootState) => state.books);

  // State điều khiển form thêm/sửa sách
  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<any>(undefined);

  // State cho tìm kiếm, lọc và sắp xếp
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState<"title" | "year">("title");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  // Lấy danh sách sách từ API khi App mount
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  // Xử lý submit khi thêm/sửa sách
  const handleSubmit = (data: any) => {
    if (data.id) {
      // Nếu có id sửa sách
      dispatch(editBook(data));
    } else {
      // Nếu chưa có id  thêm sách mới
      dispatch(createBook(data));
    }
    setOpenForm(false); // đóng form sau khi submit
  };

  // Hàm xử lý lọc + tìm kiếm + sắp xếp danh sách sách
  const filteredSorted = () => {
    let out = [...books];

    // Tìm kiếm theo tiêu đề hoặc tác giả
    if (search.trim()) {
      const q = search.toLowerCase();
      out = out.filter(
        (b) => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
      );
    }

    // Lọc theo thể loại (category)
    if (category !== "all") out = out.filter((b) => b.category === category);

    // Sắp xếp theo tiêu đề hoặc năm xuất bản
    out.sort((a, b) => {
      if (sortBy === "title") {
        const r = a.title.localeCompare(b.title);
        return sortDir === "asc" ? r : -r;
      } else {
        const r = a.year - b.year;
        return sortDir === "asc" ? r : -r;
      }
    });

    return out;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Tiêu đề */}
      <h1 className="text-3xl font-bold mb-6">📚 Book Library Manager</h1>

      {/* Nút mở form thêm sách */}
      <Button
        variant="contained"
        onClick={() => {
          setEditing(undefined); // reset trạng thái sửa
          setOpenForm(true); // mở form
        }}
      >
        Add Book
      </Button>

      {/* Khu vực tìm kiếm, lọc, sắp xếp */}
      <div className="mt-4">
        <BookSearchSortFilter
          search={search}
          category={category}
          sortBy={sortBy}
          sortDir={sortDir}
          categories={[...new Set(books.map((b) => b.category))]} // lấy danh sách thể loại duy nhất
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
          onSortChange={(by, dir) => {
            setSortBy(by);
            setSortDir(dir);
          }}
          onClear={() => {
            // reset filter
            setSearch("");
            setCategory("all");
            setSortBy("title");
            setSortDir("asc");
          }}
        />
      </div>

      {/* Hiển thị trạng thái loading khi gọi API */}
      {loading ? (
        <div className="flex justify-center mt-6">
          <CircularProgress />
        </div>
      ) : (
        // Hiển thị danh sách sách
        <div className="mt-6">
          <BookList
            books={filteredSorted()} // danh sách sau khi lọc/sắp xếp
            onEdit={(b) => {
              setEditing(b); // set sách đang sửa
              setOpenForm(true); // mở form
            }}
            onDelete={(id) => dispatch(removeBook(id))} // xóa sách
          />
        </div>
      )}

       {/* Form thêm/sửa sách  */}
      <BookForm
        open={openForm}
        initial={editing} 
        onClose={() => setOpenForm(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
