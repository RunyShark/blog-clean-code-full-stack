export class Validators {
  static get email() {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  }

  static isString(value: string): boolean {
    return typeof value === 'string';
  }

  static validLength(value: string, length: number): boolean {
    return value.length === length;
  }
}
