import { Express, Router } from 'express';
import { ServerAdapterDomain } from '@common/adapter';
import { AppMiddleware } from '@presentation/middleware';
import { AppRoutes } from '@presentation/routers/app.router';
import { prisma } from '@common/config';

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
    this.middleware();
    this.routerApp();
    this.listen();
  }
}
