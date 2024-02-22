import { AuthDataSource } from '@domain/datasources/auth/auth.datasource';
import {
  CreateUserDto,
  LoginUserDto,
  ResetPasswordUserDto,
} from '@domain/dtos/auth';
import { UserEntity } from '@domain/entities';
import { AuthRepository } from '@domain/repositories';

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly authDataSource: AuthDataSource) {}

  createAccount(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.authDataSource.createAccount(createUserDto);
  }

  login(loginUserDto: LoginUserDto): Promise<UserEntity> {
    return this.authDataSource.login(loginUserDto);
  }
  refreshToken(): Promise<UserEntity> {
    return this.authDataSource.refreshToken();
  }
  resetpassword(id: ResetPasswordUserDto): Promise<boolean> {
    return this.authDataSource.resetpassword(id);
  }
}
