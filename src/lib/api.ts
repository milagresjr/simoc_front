import axios from "axios";

const API_URL = "http://localhost:3333";

export const api = axios.create({
  baseURL: API_URL, // Substitua pela URL da sua API
  headers: {
    "Content-Type": "application/json",
  },
});


// JWT
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
