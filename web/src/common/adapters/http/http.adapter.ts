export abstract class HttpAdapter {
  abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>;
  abstract post<T>(
    url: string,
    data: Record<string, unknown>,
    options?: Record<string, unknown>
  ): Promise<T>;
}
