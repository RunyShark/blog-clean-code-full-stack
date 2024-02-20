import { Validators } from '@common/helper';
import { CustomError } from '@domain/errors/custom.error';

export class ResetPasswordUserDto {
  private constructor() {}

  static get email() {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  }

  static create(object: {
    [key: string]: any;
  }): [CustomError?, ResetPasswordUserDto?] {
    const { id } = object;

    return [, new ResetPasswordUserDto()];
  }
}
