import { Server } from '@presentation/index';
import { expressServer } from './common';

(() => main())();

async function main() {
  new Server({
    port: 3000,
    server: expressServer,
  }).start();
}
