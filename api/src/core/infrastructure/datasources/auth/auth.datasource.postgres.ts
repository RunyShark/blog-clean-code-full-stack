import { EncryptAdapterDomain, encrypt } from '@common/adapter';
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
  constructor(
    private readonly db: typeof prisma,
    private readonly hash: EncryptAdapterDomain
  ) {}

  async createAccount(createUserDto: CreateUserDto): Promise<UserEntity> {
    const newAccount = await this.db.user.create({
      data: {
        email: createUserDto.email,
        password: this.hash.encrypt(createUserDto.password),
        profile: {
          create: {
            firstName: createUserDto.profile.firstName,
            lastName: createUserDto.profile.lastName,
            photo: createUserDto.profile.photo,
          },
        },
      },
      include: {
        profile: {
          select: {
            firstName: true,
            lastName: true,
            photo: true,
          },
        },
        blog: true,
      },
    });

    if (!newAccount) CustomError.internal('Error creating account');

    return AuthMapper.toEntity(newAccount);
  }

  async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
    const { email, password } = loginUserDto;

    const user = await this.db.user.findUnique({
      where: { email },
      include: {
        profile: {
          select: {
            firstName: true,
            lastName: true,
            photo: true,
          },
        },
        blog: {
          select: {
            id: true,
            title: true,
            content: true,
            imgUrl: true,
            author: true,
            createdAt: true,
          },
        },
      },
    });

    if (!user) throw CustomError.notFound('User not found');

    const isValid = this.hash.compare(password, user.password);

    if (!isValid) throw CustomError.badRequest('Invalid password');

    return AuthMapper.toEntity(user);
  }

  async refreshToken(): Promise<UserEntity> {
    return AuthMapper.toEntity({});
  }
  async resetpassword(id: ResetPasswordUserDto): Promise<boolean> {
    return true;
  }
}
