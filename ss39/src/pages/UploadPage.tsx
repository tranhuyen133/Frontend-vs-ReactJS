import { useState } from "react";
import UploadForm from "../components/UploadForm";
import ImageList from "../components/ImageList";
import type { ImageData } from "../types";

export default function UploadPage() {
  const [images, setImages] = useState<ImageData[]>([]);

  const handleUpload = (img: ImageData) => {
    setImages([...images, img]);
  };

  const handleDelete = (id: string) => {
    setImages(images.filter((img) => img.public_id !== id));
  };

  return (
    <div>
      <h1>Upload ảnh với mô tả</h1>
      <UploadForm onUpload={handleUpload} />
      <ImageList images={images} onDelete={handleDelete} />
    </div>
  );
}
