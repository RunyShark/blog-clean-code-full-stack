import axios from 'axios';
import { AxiosAdapter } from './axios.adapter';

export const blogFetcher = new AxiosAdapter(
  axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  })
);
