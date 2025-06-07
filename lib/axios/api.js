  import axios from "axios";

  export const API_BASE_URL = "http://localhost:8080/api";

  const api = axios.create({
    baseURL: API_BASE_URL,
  });

  api.interceptors.request.use(
    (config) => {
      const token = sessionStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        sessionStorage.removeItem('token'); // opcional: limpa token
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );

  export default api;
