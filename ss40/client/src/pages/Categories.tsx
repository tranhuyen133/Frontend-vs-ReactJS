import React, { useEffect, useState } from "react";
import { CategoryService } from "../api/category";

export default function Categories() {
  const [categories, setCategories] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [editing, setEditing] = useState<any | null>(null);

  async function load() {
    const res = await CategoryService.list();
    setCategories(res.data);
  }

  useEffect(() => { load(); }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (editing) {
      await CategoryService.update(editing.id, { name });
    } else {
      await CategoryService.create({ name });
    }
    setName("");
    setEditing(null);
    load();
  }

  async function handleDelete(id: number) {
    await CategoryService.remove(id);
    load();
  }

  return (
    <div>
      <h2>Quản lý danh mục</h2>
      <form onSubmit={handleSave}>
        <input
          placeholder="Tên danh mục"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button type="submit">{editing ? "Cập nhật" : "Thêm"}</button>
      </form>
      <ul>
        {categories.map(c => (
          <li key={c.id}>
            {c.name}
            <button onClick={() => { setEditing(c); setName(c.name); }}>Sửa</button>
            <button onClick={() => handleDelete(c.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
