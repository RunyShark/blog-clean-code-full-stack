import axios from 'axios';
import { AxiosAdapter } from './axios.adapter';

export const blogFetcher = new AxiosAdapter(
  axios.create({
    baseURL: `http://localhost:3000/api/v1/`,
  })
);
