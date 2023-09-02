// services/api.js
import axios from "axios";

const apiService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  // You can add more configuration options here
});

export default apiService;
