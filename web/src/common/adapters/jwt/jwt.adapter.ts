import jwt from 'jwt-decode';
import { jwtAdapterInfrastructure } from './jwt.adapter.infrastructure';

export const jwtAdapter = new jwtAdapterInfrastructure(jwt);
