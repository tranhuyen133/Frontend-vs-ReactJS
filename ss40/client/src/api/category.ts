import { api } from "./api";

export const CategoryService = {
  list: () => api.get("/categories"),
  create: (data: any) => api.post("/categories", data),
  update: (id: number, data: any) => api.put(`/categories/${id}`, data),
  remove: (id: number) => api.delete(`/categories/${id}`)
};
