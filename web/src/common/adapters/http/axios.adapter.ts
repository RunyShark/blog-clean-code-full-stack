import { HttpAdapter } from './http.adapter';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

export class AxiosAdapter implements HttpAdapter {
  constructor(private readonly axiosInstance: AxiosInstance) {}

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get<T>(url, config);

      return data;
    } catch (error) {
      throw Error(`Error fetching get: ${url}`);
    }
  }
}
