import axios from "axios";

const api = axios.create({
  baseURL: "https://projeto-cadastro-api.onrender.com/", // URL base da API
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
