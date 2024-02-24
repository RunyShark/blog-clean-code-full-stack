import { Router } from 'express';
import { encrypt } from '../../../common/adapter/encrypt';
import { prisma } from '../../../common/config';

import {
  AuthRepositoryImpl,
  BlogRepositoryImpl,
} from '../../../core/infrastructure/repositories';
import { UserRepositoryImpl } from '../../../core/infrastructure/repositories/user';
import { AuthRouter } from './auth/auth.router';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UserRouter } from './user/user.router';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { WebRouter } from './web/web.router';
import { WebController } from './web/web.controller';
import { WebService } from './web/web.service';
import { AuthDataSourcePostgres } from '../../../core/infrastructure/datasources/auth/auth.datasource.postgres';
import { UserDataSourcePostgres } from '../../../core/infrastructure/datasources/user/user.datasource.postgres';
import { BlogDataSourcePostgres } from '../../../core/infrastructure/datasources/web/blog.datasource.postgres';

export enum ValidRoutes {
  auth = 'auth',
  user = 'user',
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
    private readonly db: typeof prisma,
    { apiV = 'v1', apiPrefix = 'api' }: configRouter
  ) {
    this.apiV = apiV;
    this.apiPrefix = apiPrefix;
  }

  get routes(): Router {
    const baseApi = `/${this.apiPrefix}/${this.apiV}/`;

    const authRouter = new AuthRouter(
      this.router,
      new AuthController(
        new AuthService(
          new AuthRepositoryImpl(new AuthDataSourcePostgres(this.db, encrypt))
        )
      )
    ).routes;

    const userRouter = new UserRouter(
      this.router,
      new UserController(
        new UserService(
          new UserRepositoryImpl(new UserDataSourcePostgres(this.db, encrypt))
        )
      )
    ).routes;

    const webRouter = new WebRouter(
      this.router,
      new WebController(
        new WebService(
          new BlogRepositoryImpl(new BlogDataSourcePostgres(this.db))
        )
      )
    ).routes;

    this.router.use(`${baseApi}${ValidRoutes.auth}`, authRouter);
    this.router.use(`${baseApi}${ValidRoutes.user}`, userRouter);
    this.router.use(`${baseApi}${ValidRoutes.web}`, webRouter);

    return this.router;
  }
}
