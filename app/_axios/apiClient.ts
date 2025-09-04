import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    timeout: 10000,
    Authorization: `Bearer ${process.env.VITE_API_KEY}`,
  },
});
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error);
    return Promise.reject(error);
  }
);
export default apiClient;
