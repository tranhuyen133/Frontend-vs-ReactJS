import React, { useState, useEffect } from "react";
import { CategoryService } from "../api/category";
import { ProductService } from "../api/product";
import { uploadToCloudinary } from "../api/cloudinary";

type Props = {
  product?: any;
  onSaved?: () => void;
};

export default function ProductForm({ product, onSaved }: Props) {
  const [name, setName] = useState(product?.name || "");
  const [price, setPrice] = useState(product?.price || 0);
  const [categoryId, setCategoryId] = useState<number | "">(
    product?.categoryId || ""
  );
  const [imageUrl, setImageUrl] = useState(product?.image || "");
  const [categories, setCategories] = useState<any[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    CategoryService.list().then(res => setCategories(res.data));
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      setSaving(true);
      let image = imageUrl;
      if (file) image = await uploadToCloudinary(file);

      const payload = { name, price, categoryId, image, description: "" };
      if (product?.id) {
        await ProductService.update(product.id, payload);
      } else {
        await ProductService.create(payload);
      }
      onSaved && onSaved();
    } catch (err) {
      console.error(err);
      alert("Lưu thất bại");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        placeholder="Tên sản phẩm"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Giá"
        value={price}
        onChange={e => setPrice(+e.target.value)}
      />
      <select
        value={categoryId}
        onChange={e => setCategoryId(+e.target.value)}
      >
        <option value="">-- Chọn danh mục --</option>
        {categories.map(c => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
      <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} />
      {imageUrl && <img src={imageUrl} style={{ width: 80 }} />}
      <button type="submit" disabled={saving}>
        {saving ? "Đang lưu..." : "Lưu"}
      </button>
    </form>
  );
}
