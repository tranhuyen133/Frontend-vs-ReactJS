import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: 200, borderRight: "1px solid #ddd", padding: 10 }}>
        <h3>Admin</h3>
        <nav>
          <ul>
            <li><Link to="/products">Sản phẩm</Link></li>
            <li><Link to="/categories">Danh mục</Link></li>
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 20 }}>
        <Outlet />
      </main>
    </div>
  );
}
