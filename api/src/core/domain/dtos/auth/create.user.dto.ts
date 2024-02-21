import { Validators } from '@common/helper';
import { CustomError } from '@domain/errors/custom.error';

export class CreateUserDto {
  private constructor(
    public email: string,
    public password: string,
    public profile: {
      firstName: string;
      lastName: string;
      photo: string;
    }
  ) {}

  static create(object: {
    [key: string]: any;
  }): [CustomError?, CreateUserDto?] {
    const { email, password, profile } = object;

    if (!profile) return [CustomError.badRequest('profile is required')];

    if (!profile.firstName)
      return [CustomError.badRequest('firstName is required')];

    if (!Validators.isString(profile.firstName))
      return [CustomError.badRequest('firstName must be a string')];

    if (!profile.lastName)
      return [CustomError.badRequest('lastName is required')];

    if (!Validators.isString(profile.lastName))
      return [CustomError.badRequest('lastName must be a string')];

    if (!email) return [CustomError.badRequest('email is required')];

    if (!Validators.email.test(email))
      return [CustomError.badRequest('invalid email')];

    if (!password) return [CustomError.badRequest('password is required')];

    if (password.length < 6)
      return [CustomError.badRequest('invalid password')];

    return [, new CreateUserDto(email, password, profile)];
  }
}
