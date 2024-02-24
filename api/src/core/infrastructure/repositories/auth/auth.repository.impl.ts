import { AuthDataSource } from '../../../../core/domain/datasources';
import {
  CreateUserDto,
  LoginUserDto,
  ResetPasswordUserDto,
} from '../../../../core/domain/dtos';
import { UserEntity } from '../../../../core/domain/entities';
import { AuthRepository } from '../../../../core/domain/repositories';

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly authDataSource: AuthDataSource) {}

  createAccount(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.authDataSource.createAccount(createUserDto);
  }

  login(loginUserDto: LoginUserDto): Promise<UserEntity> {
    return this.authDataSource.login(loginUserDto);
  }
  refreshToken(userId: string): Promise<UserEntity> {
    return this.authDataSource.refreshToken(userId);
  }
  resetpassword(id: ResetPasswordUserDto): Promise<boolean> {
    return this.authDataSource.resetpassword(id);
  }
}
