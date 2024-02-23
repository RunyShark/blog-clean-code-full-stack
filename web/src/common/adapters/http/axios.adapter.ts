import { HttpAdapter } from './http.adapter';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

export class AxiosAdapter implements HttpAdapter {
  constructor(private readonly axiosInstance: AxiosInstance) {}

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const { data: resultData } = await this.axiosInstance.delete<T>(url, {
        ...config,
      });
      return resultData;
    } catch (error) {
      throw Error(`Error fetching get: ${url}`);
    }
  }

  async put<T>(
    url: string,
    data: Record<string, unknown>,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const { data: resultData } = await this.axiosInstance.put<T>(url, data, {
        ...config,
      });

      return resultData;
    } catch (error) {
      throw Error(`Error fetching get: ${url}`);
    }
  }

  async post<T>(
    url: string,
    data: Record<string, unknown>,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const { data: resultData } = await this.axiosInstance.post<T>(url, data, {
        ...config,
      });

      return resultData;
    } catch (error) {
      throw Error(`Error fetching get: ${url}`);
    }
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get<T>(url, {
        ...config,
      });

      return data;
    } catch (error) {
      throw Error(`Error fetching get: ${url}`);
    }
  }
}
