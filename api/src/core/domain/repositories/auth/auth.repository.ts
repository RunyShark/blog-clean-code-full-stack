import {
  CreateUserDto,
  LoginUserDto,
  ResetPasswordUserDto,
} from '@domain/dtos/auth';
import { UserEntity } from '@domain/entities';

export abstract class AuthRepository {
  abstract createAccount: (createUserDto: CreateUserDto) => Promise<UserEntity>;
  abstract login: (loginUserDto: LoginUserDto) => Promise<UserEntity>;
  abstract refreshToken: (userId: string) => Promise<UserEntity>;
  abstract resetpassword: (id: ResetPasswordUserDto) => Promise<boolean>;
}
