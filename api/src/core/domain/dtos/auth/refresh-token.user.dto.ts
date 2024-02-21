import { Validators } from '@common/helper';
import { CustomError } from '@domain/errors/custom.error';

export class RefreshTokenUserDto {
  static create(object: {
    [key: string]: any;
  }): [CustomError?, RefreshTokenUserDto?] {
    const { token } = object;

    if (!token) return [CustomError.badRequest('token is required')];

    return [, new RefreshTokenUserDto()];
  }
}
