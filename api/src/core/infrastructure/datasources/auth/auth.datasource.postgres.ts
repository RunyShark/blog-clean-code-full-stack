import { encrypt } from '@common/adapter';
import { prisma } from '@common/config';
import { AuthDataSource } from '@domain/datasources/auth/auth.datasource';
import {
  CreateUserDto,
  LoginUserDto,
  ResetPasswordUserDto,
} from '@domain/dtos/auth';
import { UserEntity } from '@domain/entities';
import { CustomError } from '@domain/errors/custom.error';
import { AuthMapper } from '@infrastructure/mappers/auth/auth.mapper';

export class AuthDataSourcePostgres implements AuthDataSource {
  constructor(private readonly db: typeof prisma) {}
  async createAccount(createUserDto: CreateUserDto): Promise<UserEntity> {
    const newAccount = await this.db.user.create({
      data: {
        email: createUserDto.email,
        password: encrypt.encrypt(createUserDto.password),
        profile: {
          create: {
            firstName: createUserDto.profile.firstName,
            lastName: createUserDto.profile.lastName,
            photo: createUserDto.profile.photo,
          },
        },
      },
      include: {
        profile: true,
        blog: true,
      },
    });

    if (!newAccount) CustomError.internal('Error creating account');

    return AuthMapper.toEntity(newAccount);
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
