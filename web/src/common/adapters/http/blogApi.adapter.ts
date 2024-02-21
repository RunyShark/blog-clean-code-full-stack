import axios from 'axios';
import { AxiosAdapter } from './axios.adapter';

export const movieDBFetcher = new AxiosAdapter(
  axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_MOVIE_DB_API_URL}`,
    params: {
      api_key: 'f67e2b5279b2cd1b47514445ab436b4e',
      language: 'es',
    },
  })
);
