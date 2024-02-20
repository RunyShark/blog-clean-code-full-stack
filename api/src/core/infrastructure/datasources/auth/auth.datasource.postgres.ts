import { prisma } from '@common/config';
import { AuthDataSource } from '@domain/datasources/auth/auth.datasource';
import {
  CreateUserDto,
  LoginUserDto,
  ResetPasswordUserDto,
} from '@domain/dtos/auth';
import { UserEntity } from '@domain/entities';
import { AuthMapper } from '@infrastructure/mappers/auth/auth.mapper';

export class AuthDataSourcePostgres implements AuthDataSource {
  constructor(private readonly db: typeof prisma) {}
  async createAccount(createUserDto: CreateUserDto): Promise<UserEntity> {
    return AuthMapper.toEntity(createUserDto);
  }
  async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
    return AuthMapper.toEntity(loginUserDto);
  }
  async refreshToken(): Promise<UserEntity> {
    return AuthMapper.toEntity({});
  }
  async resetpassword(id: ResetPasswordUserDto): Promise<boolean> {
    return true;
  }
}
