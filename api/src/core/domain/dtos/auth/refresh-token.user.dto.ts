import { Validators } from '@common/helper';
import { CustomError } from '@domain/errors/custom.error';

export class RefreshTokenUserDto {
  private constructor() {}

  static get email() {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  }

  static create(object: {
    [key: string]: any;
  }): [CustomError?, RefreshTokenUserDto?] {
    return [, new RefreshTokenUserDto()];
  }
}
