import { CustomError } from '../../errors/custom.error';

export class DeleteUserDto {
  private constructor(public userId: string) {}

  static create(object: Record<string, any>): [CustomError?, DeleteUserDto?] {
    const { userId } = object;

    if (!userId) return [CustomError.badRequest('User id is required')];

    return [, new DeleteUserDto(userId)];
  }
}
