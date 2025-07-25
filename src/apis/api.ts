import axios from 'axios';

// Vite에서는 환경변수 앞에 VITE_ 접두사가 필요합니다
const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_SOME_HEADER}`,
  },
});

export default api;
