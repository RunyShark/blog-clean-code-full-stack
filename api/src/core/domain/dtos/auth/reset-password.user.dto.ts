import { Validators } from '@common/helper';
import { CustomError } from '@domain/errors/custom.error';

export class ResetPasswordUserDto {
  static create(object: {
    [key: string]: any;
  }): [CustomError?, ResetPasswordUserDto?] {
    const { id } = object;

    if (!id) return [CustomError.badRequest('id is required')];

    return [, new ResetPasswordUserDto()];
  }
}
