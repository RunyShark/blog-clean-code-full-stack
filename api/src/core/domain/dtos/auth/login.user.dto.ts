import { Validators } from '../../../../common/helper/validators';
import { CustomError } from '../../errors/custom.error';

export class LoginUserDto {
  private constructor(public email: string, public password: string) {}

  static create(object: { [key: string]: any }): [CustomError?, LoginUserDto?] {
    const { email, password } = object;

    if (!email) return [CustomError.badRequest('email is required')];

    if (!Validators.email.test(email))
      return [CustomError.badRequest('invalid email')];

    if (!password) return [CustomError.badRequest('password is required')];

    if (password.length < 6)
      return [CustomError.badRequest('invalid password')];

    return [, new LoginUserDto(email, password)];
  }
}
