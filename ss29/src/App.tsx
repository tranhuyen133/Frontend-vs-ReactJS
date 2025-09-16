import React, { useEffect, useState } from "react";
import axios from "axios";

// ----- Kiểu dữ liệu -----
type Product = {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
};

type Student = {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
};

function App() {
  // State lưu dữ liệu
  const [products, setProducts] = useState<Product[]>([]);
  const [students, setStudents] = useState<Student[]>([]);

  // ----------- Bài 1 + Bài 2: Products với fetch ----------
  const getAllProduct = () => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        console.log("Danh sách sản phẩm:", data);
        setProducts(data);
      })
      .catch((error) => console.error("Lỗi khi fetch products:", error));
  };

  // ----------- Bài 3 + Bài 4: Students với axios ----------
  const getAllStudent = () => {
    axios
      .get<Student[]>("http://localhost:3002/students")
      .then((res) => {
        console.log("Danh sách sinh viên:", res.data);
        setStudents(res.data);
      })
      .catch((error) => console.error("Lỗi khi fetch students:", error));
  };

  // Gọi API khi load trang
  useEffect(() => {
    getAllProduct();
    getAllStudent();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Quản lý API</h1>

      {/* Hiển thị Products */}
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <h3>{p.product_name}</h3>
            <img src={p.image} alt={p.product_name} width={100} />
            <p>Giá: {p.price} USD</p>
            <p>Số lượng: {p.quantity}</p>
          </li>
        ))}
      </ul>

      {/* Hiển thị Students */}
      <h2>Danh sách sinh viên</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            <h3>{s.student_name}</h3>
            <p>Email: {s.email}</p>
            <p>Địa chỉ: {s.address}</p>
            <p>Điện thoại: {s.phone}</p>
            <p>Trạng thái: {s.status ? "Đang học" : "Nghỉ"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
