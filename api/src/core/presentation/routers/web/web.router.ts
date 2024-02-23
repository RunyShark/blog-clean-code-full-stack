import { Router } from 'express';
import { WebController } from './web.controller';
import { AuthMiddleware } from '@presentation/middleware';

export class WebRouter {
  constructor(
    private readonly router: Router,
    private readonly authController: WebController
  ) {}

  get routes(): Router {
    this.router.post(
      '/create',
      [AuthMiddleware.validateJWT],
      this.authController.create
    );

    this.router.get('/getBlogs', this.authController.getBlogs);

    this.router.put(
      '/',
      [AuthMiddleware.validateJWT],
      this.authController.update
    );
    this.router.delete(
      '/',
      [AuthMiddleware.validateJWT],
      this.authController.delete
    );

    return this.router;
  }
}
