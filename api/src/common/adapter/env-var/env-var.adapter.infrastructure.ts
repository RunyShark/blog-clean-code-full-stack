import env from 'env-var';
import { EnvVarAdapterDomain } from './env-var.adapter.domain';

export class EnvVarInfrastructure implements EnvVarAdapterDomain {
  constructor(private readonly envFn: typeof env) {}
  getEnvString(plainText: string): string {
    return this.envFn.get(plainText).required().asString();
  }
  getEnvNumber(plainText: string): number {
    return this.envFn.get(plainText).required().asInt();
  }
}
