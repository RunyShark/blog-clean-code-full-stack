import { Router, Request, Response } from 'express';
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

    return this.router;
  }
}
