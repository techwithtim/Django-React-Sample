import axios from 'axios';
import { ACCESS_TOKEN } from './constants.js';


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const API_KEY = import.meta.env.VITE_API_KEY
console.log(import.meta.env.VITE_API_URL, import.meta.env.VITE_API_KEY)

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers['API-Key'] = API_KEY;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default api