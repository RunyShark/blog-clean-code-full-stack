import { Router } from 'express';
import { UserController } from './user.controller';
import { AuthMiddleware } from '../../middleware';

export class UserRouter {
  constructor(
    private readonly router: Router,
    private readonly userController: UserController
  ) {}

  get routes(): Router {
    this.router.put(
      '/account',
      [AuthMiddleware.validateJWT],
      this.userController.update
    );
    this.router.delete(
      '/account/:userId',
      [AuthMiddleware.validateJWT],
      this.userController.delete
    );
    return this.router;
  }
}
