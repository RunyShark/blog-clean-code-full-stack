import { Router } from 'express';
import { AuthRouter } from './auth';
import { WebRouter } from './web';

export enum ValidRoutes {
  auth = 'auth',
  web = 'web',
}

interface configRouter {
  apiPrefix?: string;
  apiV?: string;
}

export class AppRoutes {
  private readonly apiV: string = 'v1';
  private readonly apiPrefix: string = 'v1';
  constructor(
    private readonly router: Router,
    { apiV = 'v1', apiPrefix = 'api' }: configRouter
  ) {
    this.apiV = apiV;
    this.apiPrefix = apiPrefix;
  }
  get routes(): Router {
    const baseApi = `/${this.apiPrefix}/${this.apiV}/`;
    console.log('baseApi', baseApi);
    const authRouter = new AuthRouter(this.router).routes;
    const webRouter = new WebRouter(this.router).routes;

    this.router.use(`${baseApi}${ValidRoutes.auth}`, authRouter);
    this.router.use(`${baseApi}${ValidRoutes.web}`, webRouter);

    return this.router;
  }
}
