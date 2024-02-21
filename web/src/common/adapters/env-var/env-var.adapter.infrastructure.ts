import { EnvVarAdapterDomain } from './env-var.adapter.domain';

export class EnvVarInfrastructure implements EnvVarAdapterDomain {
  getEnvString(plainText: string): string {
    const env = import.meta.env[plainText];

    if (!env) throw new Error(`Env var ${plainText} not found`);

    if (typeof env !== 'string')
      throw new Error(`Env var ${plainText} is not a string`);

    return env;
  }

  getEnvNumber(plainText: string): number {
    const env = import.meta.env[plainText];

    if (!env) throw new Error(`Env var ${plainText} not found`);

    if (typeof env !== 'number')
      throw new Error(`Env var ${plainText} is not a number`);

    return import.meta.env[plainText];
  }
}
