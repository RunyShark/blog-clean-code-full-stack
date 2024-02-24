import { CustomError } from '../../errors/custom.error';

export class RefreshTokenUserDto {
  private constructor(public userId: string) {}
  static create(object: {
    [key: string]: any;
  }): [CustomError?, RefreshTokenUserDto?] {
    const { userId } = object;

    if (!userId) return [CustomError.badRequest('token is required')];

    return [, new RefreshTokenUserDto(userId)];
  }
}
