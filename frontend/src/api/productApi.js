import api from "./axios";

export const fetchProducts = () => api.get("/products/products");

export const crateProduct = (data) => 
    api.post("/products",data);

export const updateProduct = (id, data) =>
    api.put(`/products/${id}`, data);

export const deleteProduct = (id) => 
    api.delete(`/products/${id}`);