import { Router } from 'express';
import { AuthRouter } from './auth';
import { WebRouter } from './web';
import { AuthController } from './auth/auth.controller';
import { WebController } from './web/web.controller';
import { AuthService } from './auth/auth.service';
import { WebService } from './web/web.service';
import {
  AuthRepositoryImpl,
  BlogRepositoryImpl,
} from '@infrastructure/repositories';
import { AuthDataSourcePostgres } from '@infrastructure/datasources/auth';
import { prisma } from '../../../common/config/db/prisma.service';
import { BlogDataSourcePostgres } from '@infrastructure/datasources/web/blog.datasource.postgres';
import { encrypt } from '@common/adapter';
import { UserRouter } from './user';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserRepositoryImpl } from '@infrastructure/repositories/user/user.repository.impl';
import { UserDataSourcePostgres } from '@infrastructure/datasources/user';

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
