import { EnvVarInfrastructure } from './env-var.adapter.infrastructure';

const envVarInfrastructure = new EnvVarInfrastructure();

export const envs = {
  api_url: envVarInfrastructure.getEnvString('VITE_API_URL'),
};
