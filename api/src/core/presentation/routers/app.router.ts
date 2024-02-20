import { Router } from 'express';

export enum ValidRoutes {
  auth = 'auth',
}

export class AppRoutes {
  constructor(private readonly router: Router) {}
  get routes(): Router {
    return this.router;
  }
}
