import { Express, Router } from 'express';
import { ServerAdapterDomain, envs } from '@common/adapter';
import { AppMiddleware } from '@presentation/middleware';
import { AppRoutes } from '@presentation/routers/app.router';
import { prisma } from '@common/config';
import cors from 'cors';

interface ServerConfigurationOptionalProps {
  port: number;
}

interface ServerConfiguration
  extends Partial<ServerConfigurationOptionalProps> {
  server: ServerAdapterDomain;
}

export class Server {
  private readonly server: Express;
  private readonly router: Router;
  private readonly port: number;

  constructor({ server, port = 3000 }: ServerConfiguration) {
    this.server = server.app<Express>();
    this.router = server.router<Router>();
    this.port = port;
  }

  private cors() {
    this.server.use(cors());
    this.server.use(
      cors({
        origin: envs.webs_urL,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
      })
    );
  }

  private middleware() {
    new AppMiddleware(this.server).init();
  }

  private routerApp() {
    this.server.use(new AppRoutes(this.router, prisma, {}).routes);
  }

  private listen(): void {
    this.server.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  async start(): Promise<void> {
    this.cors();
    this.middleware();
    this.routerApp();
    this.listen();
  }
}
