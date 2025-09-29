import axios from "axios";

// Hàm upload ảnh kèm mô tả
export const uploadImage = async (file: File, description: string) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "ml_default"); // preset phải tạo trên Cloudinary
  formData.append("context", `description=${description}`); // metadata

  const res = await axios.post(
    `https://api.cloudinary.com/v1_1/<CLOUD_NAME>/image/upload`,
    formData
  );
  return res.data; // trả về {url, public_id, ...}
};

// Hàm xoá ảnh
export const deleteImage = async (publicId: string) => {
  // Thực tế cần backend server để bảo mật API_SECRET
  // Ở đây demo gọi API giả lập
  console.log("Delete image with id:", publicId);
};
