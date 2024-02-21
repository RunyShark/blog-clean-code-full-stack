import { Router, Request, Response } from 'express';
import { AuthController } from './auth.controller';

export class AuthRouter {
  constructor(
    private readonly router: Router,
    private readonly authController: AuthController
  ) {}

  get routes(): Router {
    this.router.get('/login', this.authController.login);
    this.router.get('/register', this.authController.register);
    this.router.get('/refreshToken', this.authController.refreshToken);
    this.router.get('/resetpassword', this.authController.resetpassword);

    return this.router;
  }
}
