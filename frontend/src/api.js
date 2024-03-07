import axios from 'axios';
import { ACCESS_TOKEN } from './constants.js';


const api = axios.create({
  baseURL: window?.configs?.apiUrl ? window.configs.apiUrl : "localhost:5000/",
});

const API_KEY = window?.configs?.apiKey ? window.configs.apiKey : ""


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