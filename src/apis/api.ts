import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-url.com', // 실제 API 주소로 변경하세요
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
