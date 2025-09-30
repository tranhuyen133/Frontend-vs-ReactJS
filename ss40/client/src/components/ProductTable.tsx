import React from "react";

export default function ProductTable({ products, onEdit, onDelete }: any) {
  return (
    <table border={1} cellPadding={6} style={{ width: "100%", marginTop: 10 }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Ảnh</th>
          <th>Tên</th>
          <th>Giá</th>
          <th>Danh mục</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p: any) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td><img src={p.image} alt={p.name} style={{ width: 50 }} /></td>
            <td>{p.name}</td>
            <td>{p.price.toLocaleString()} VND</td>
            <td>{p.categoryId}</td>
            <td>
              <button onClick={() => onEdit(p)}>Sửa</button>
              <button onClick={() => onDelete(p.id)}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
