import { envs, jwtAdapter } from '@common/adapter';
import { CustomError } from '@domain/errors/custom.error';
import { NextFunction, Request, Response } from 'express';

export class AuthMiddleware {
  static validateJWT = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const authorization = req.header('Authorization');
    if (!authorization)
      return res.status(401).json({ error: 'No token provided' });

    if (!authorization.startsWith('Bearer '))
      return res.status(401).json({ error: 'Invalid Bearer token' });

    const token = authorization.split(' ').at(1) || '';

    const isValidToken = await jwtAdapter.verify<{ id: string }>(
      token,
      envs.jwt_seed
    );

    if (!isValidToken) return res.status(401).json({ error: 'Invalid token' });

    req.body.userId = isValidToken.id;

    try {
      next();
    } catch (error) {
      if (error instanceof CustomError) throw error;
      throw CustomError.internal();
    }
  };
}
