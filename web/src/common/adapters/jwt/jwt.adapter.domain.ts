interface Handlers {}

export abstract class JwtAdapterDomain implements Handlers {
  abstract decode<T>(token: string): Promise<T>;
}
