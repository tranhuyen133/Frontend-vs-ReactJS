// Định nghĩa kiểu dữ liệu ảnh (TypeScript interface)
export interface ImageData {
  url: string;          // Link ảnh từ Cloudinary
  public_id: string;    // ID để xoá ảnh trên Cloudinary
  description?: string; // Mô tả ảnh (metadata)
}
