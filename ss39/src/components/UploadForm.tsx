import { useState } from "react";
import { uploadImage } from "../api/cloudinary";
import type { ImageData } from "../types";

interface Props {
  onUpload: (img: ImageData) => void;
}

export default function UploadForm({ onUpload }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const res = await uploadImage(file, desc);
    const newImage: ImageData = {
      url: res.secure_url,
      public_id: res.public_id,
      description: desc,
    };
    onUpload(newImage);
    setFile(null);
    setDesc("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <input
        type="text"
        placeholder="Mô tả ảnh..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button type="submit">Upload</button>
    </form>
  );
}
