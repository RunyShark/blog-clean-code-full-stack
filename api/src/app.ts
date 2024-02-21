import { Server } from '@presentation/index';
import { envs, expressServer } from './common';

(() => main())();

async function main() {
  new Server({
    port: envs.port,
    server: expressServer,
  }).start();
}
