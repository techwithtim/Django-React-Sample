import axios from 'axios';
import { ACCESS_TOKEN } from './constants.js';

const apiUrl = window?.configs?.apiUrl ? window.configs.apiUrl : "/choreo-apis/npgb/backend-rjz/test-rest-endpoint-5c6/v1.0";

const api = axios.create({
  baseURL: apiUrl ? apiUrl : import.meta.env.VITE_API_URL,
});

console.log(apiUrl)

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default api