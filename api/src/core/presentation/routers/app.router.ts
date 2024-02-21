import { Router } from 'express';
import { AuthRouter } from './auth';
import { WebRouter } from './web';
import { AuthController } from './auth/auth.controller';
import { WebController } from './web/web.controller';
import { AuthService } from './auth/auth.service';
import { WebService } from './web/web.service';

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

    const authRouter = new AuthRouter(
      this.router,
      new AuthController(new AuthService())
    ).routes;

    const webRouter = new WebRouter(
      this.router,
      new WebController(new WebService())
    ).routes;

    this.router.use(`${baseApi}${ValidRoutes.auth}`, authRouter);
    this.router.use(`${baseApi}${ValidRoutes.web}`, webRouter);

    return this.router;
  }
}
