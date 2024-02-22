import env from 'env-var';
import 'dotenv/config';
import { EnvVarInfrastructure } from './env-var.adapter.infrastructure';

const envVarInfrastructure = new EnvVarInfrastructure(env);

export const envs = {
  webs_urL: envVarInfrastructure.getEnvString('WEBS_URL'),
  jwt_seed: envVarInfrastructure.getEnvString('JWT_SEED'),
  node_env: envVarInfrastructure.getEnvString('NODE_ENV'),
  port: envVarInfrastructure.getEnvNumber('PORT'),
};
