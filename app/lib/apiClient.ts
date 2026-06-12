import axios from "axios";
import { useAuthStore } from "../store/useAuthStore";

const apiClient = axios.create({ baseURL: "/api" });

apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) config.headers["x-auth-token"] = token;
  return config;
});

export default apiClient;
