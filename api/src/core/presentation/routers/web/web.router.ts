import { Router, Request, Response } from 'express';
import { WebController } from './web.controller';

export class WebRouter {
  constructor(
    private readonly router: Router,
    private readonly authController: WebController
  ) {}

  get routes(): Router {
    this.router.get('/create', this.authController.create);
    this.router.get('/getBlogs', this.authController.getBlogs);

    return this.router;
  }
}
