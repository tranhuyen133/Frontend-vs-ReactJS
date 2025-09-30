import { api } from "./api";

export const ProductService = {
  list: (params?: any) => api.get("/products", { params }),
  get: (id: number) => api.get(`/products/${id}`),
  create: (data: any) => api.post("/products", data),
  update: (id: number, data: any) => api.put(`/products/${id}`, data),
  remove: (id: number) => api.delete(`/products/${id}`)
};
