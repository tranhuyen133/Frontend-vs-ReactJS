import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "./products"; 

function ListProduct() {
  // Hook để đọc và ghi query string
  const [searchParams, setSearchParams] = useSearchParams();

  // Lấy giá trị "search" trên URL, nếu không có thì rỗng
  const searchQuery = searchParams.get("search") || "";

  // State để lưu input
  const [keyword, setKeyword] = useState(searchQuery);

  // Cập nhật lại state khi URL thay đổi (đồng bộ input với query)
  useEffect(() => {
    setKeyword(searchQuery);
  }, [searchQuery]);

  // Xử lý khi nhấn nút Search
  const handleSearch = () => {
    if (keyword) {
      setSearchParams({ search: keyword });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách sản phẩm</h2>

      {/* Ô nhập và nút search */}
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Nhập từ khóa..."
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button onClick={handleSearch}>Search</button>

      <ul style={{ marginTop: "20px" }}>
        {products.map((p) => (
          <li key={p.id}>
            <b>{p.name}</b> - {p.price.toLocaleString()} VND
            <br />
            {p.description}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListProduct;
