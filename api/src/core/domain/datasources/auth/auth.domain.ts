import {
  CreateUserDto,
  LoginUserDto,
  ResetPasswordUserDto,
} from '@domain/dtos/auth';
import { UserEntity } from '@domain/entities';

export abstract class AuthDomain {
  abstract createAccount: (createUserDto: CreateUserDto) => Promise<UserEntity>;
  abstract login: (loginUserDto: LoginUserDto) => Promise<UserEntity>;
  abstract refreshToken: () => Promise<UserEntity>;
  abstract resetpassword: (id: ResetPasswordUserDto) => Promise<boolean>;
}