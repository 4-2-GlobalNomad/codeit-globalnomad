import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://sp-globalnomad-api.vercel.app/10-2/',
});
