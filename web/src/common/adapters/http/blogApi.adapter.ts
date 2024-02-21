import axios from 'axios';
import { AxiosAdapter } from './axios.adapter';
import { envs } from '../env';

export const blogFetcher = new AxiosAdapter(
  axios.create({
    baseURL: `${envs.api_url}`,
  })
);
