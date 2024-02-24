import { Router } from 'express';
import { AuthController } from './auth.controller';
import { AuthMiddleware } from '../../middleware';

export class AuthRouter {
  constructor(
    private readonly router: Router,
    private readonly authController: AuthController
  ) {}

  get routes(): Router {
    this.router.post('/login', this.authController.login);
    this.router.post('/register', this.authController.register);
    this.router.get(
      '/refreshToken',
      [AuthMiddleware.validateJWT],
      this.authController.refreshToken
    );
    this.router.post('/resetpassword', this.authController.resetpassword);

    return this.router;
  }
}
