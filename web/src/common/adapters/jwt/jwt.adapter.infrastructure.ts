import jwt from 'jwt-decode';
import { JwtAdapterDomain } from './jwt.adapter.domain';

export class jwtAdapterInfrastructure implements JwtAdapterDomain {
  constructor(private readonly jwtFn: typeof jwt) {}
  decode<T>(token: string): Promise<T> {
    return this.jwtFn.jwtDecode(token);
  }
}
