import React, { useEffect, useState } from "react";
import { ProductService } from "../api/product";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";
import Pagination from "../components/Pagination";

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const [editing, setEditing] = useState<any | null>(null);
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [total, setTotal] = useState(0);
  const [q, setQ] = useState("");

  async function load() {
    const params: any = { _page: page, _limit: limit };
    if (q) params.q = q;
    const res = await ProductService.list(params);
    setProducts(res.data);
    setTotal(Number(res.headers["x-total-count"] || res.data.length));
  }

  useEffect(() => { load(); }, [page, q]);

  async function handleDelete(id: number) {
    await ProductService.remove(id);
    load();
  }

  return (
    <div>
      <h2>Quản lý sản phẩm</h2>
      <div>
        <input
          placeholder="Tìm kiếm..."
          value={q}
          onChange={e => setQ(e.target.value)}
        />
        <button onClick={() => setEditing({})}>Thêm mới</button>
      </div>

      {editing && (
        <ProductForm product={editing} onSaved={() => { setEditing(null); load(); }} />
      )}

      <ProductTable
        products={products}
        onEdit={p => setEditing(p)}
        onDelete={handleDelete}
      />

      <Pagination page={page} total={total} limit={limit} onChange={setPage} />
    </div>
  );
}
