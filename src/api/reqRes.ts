import axios from 'axios';

export const reqResApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  },
});
