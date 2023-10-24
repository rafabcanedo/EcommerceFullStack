import axios from "axios";

export const api = axios.create({
 baseURL: process.env.API_URL,
 headers: {
  'Content-Type': 'application/json',
 },
});

// Fetch and Create Users
export const getProducts = (offset = 0) => api.get(`/products`);