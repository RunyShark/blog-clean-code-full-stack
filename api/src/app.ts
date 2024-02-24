import { envs } from './common/adapter/env-var';
import { expressServer } from './common/adapter/server';
import { Server } from './core/presentation/server/server';

(() => main())();

async function main() {
  new Server({
    port: envs.port,
    server: expressServer,
  }).start();
}
