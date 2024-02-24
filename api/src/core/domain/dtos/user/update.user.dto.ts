import { CustomError } from '../../errors/custom.error';

export class UpdateUserDto {
  private constructor(
    public userId: string,
    public email?: string,
    public password?: string,
    public profile?: {
      firstName?: string;
      lastName?: string;
      photo?: string;
    }
  ) {}

  static create(object: Record<string, any>): [CustomError?, UpdateUserDto?] {
    const { email, password, profile, userId } = object;

    if (!userId) return [CustomError.badRequest('User id is required')];

    return [, new UpdateUserDto(userId, email, password, profile)];
  }
}
