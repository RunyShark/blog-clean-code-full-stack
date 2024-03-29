import { prisma } from '../../../../common/config';
import { AuthDataSource } from '../../../../core/domain/datasources';
import {
  CreateUserDto,
  LoginUserDto,
  ResetPasswordUserDto,
} from '../../../../core/domain/dtos';
import { UserEntity } from '../../../../core/domain/entities';
import { CustomError } from '../../../../core/domain/errors/custom.error';

import { EncryptAdapterDomain } from '../../../../common/adapter/encrypt/encrypt.adapter.domain';
import { AuthMapper } from '../../mappers/auth/auth.mapper';

export class AuthDataSourcePostgres implements AuthDataSource {
  constructor(
    private readonly db: typeof prisma,
    private readonly hash: EncryptAdapterDomain
  ) {}

  private accountExist(email: string) {
    return this.db.user.findUnique({
      where: { email },
    });
  }

  async createAccount(createUserDto: CreateUserDto): Promise<UserEntity> {
    const userExist = await this.accountExist(createUserDto.email);

    if (userExist) throw CustomError.badRequest('Check your information');

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
          orderBy: {
            createdAt: 'desc',
          },
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

  async refreshToken(userId: string): Promise<UserEntity> {
    const user = await this.db.user.findUnique({
      where: { id: userId },
      include: {
        profile: {
          select: {
            firstName: true,
            lastName: true,
            photo: true,
          },
        },
        blog: {
          orderBy: {
            createdAt: 'desc',
          },
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

    return AuthMapper.toEntity(user);
  }
  async resetpassword(id: ResetPasswordUserDto): Promise<boolean> {
    return true;
  }
}
