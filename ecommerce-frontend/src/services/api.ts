import axios from "axios";

export const api = axios.create({
 baseURL: 'http://localhost:3333',
 headers: {
  'Content-Type': 'application/json',
 },
});

// Fetch and Create Users
export const getProducts = (offset = 0) => api.get(`/products`);