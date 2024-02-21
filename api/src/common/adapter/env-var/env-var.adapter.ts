import env from 'env-var';
import 'dotenv/config';
import { EnvVarInfrastructure } from './env-var.adapter.infrastructure';

const envVarInfrastructure = new EnvVarInfrastructure(env);

export const envs = {
  jwt_seed: envVarInfrastructure.getEnvString('JWT_SEED'),
  node_env: envVarInfrastructure.getEnvString('NODE_ENV'),
  port: envVarInfrastructure.getEnvNumber('PORT'),
};
