interface Handler {
  getEnvString(value: string): string;
  getEnvNumber(value: string): number;
}

export abstract class EnvVarAdapterDomain implements Handler {
  abstract getEnvString(plainText: string): string;
  abstract getEnvNumber(plainText: string): number;
}
