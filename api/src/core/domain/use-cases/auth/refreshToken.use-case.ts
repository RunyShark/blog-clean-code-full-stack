import { LoginUserDto, RefreshTokenUserDto } from '@domain/dtos/auth';
import { GenericUseCase, UserResponse } from '../interface';
import { AuthRepository } from '@domain/repositories';
import { envs, jwtAdapter } from '@common/adapter';
import { CustomError } from '@domain/errors/custom.error';
import { UserEntity } from '@domain/entities';

export class RefreshTokenUseCase implements GenericUseCase<{}, UserResponse> {
  constructor(private readonly authRepository: AuthRepository) {}

  private async generateToken(user: UserEntity) {
    const token = await jwtAdapter.sign({ id: user.id }, envs.jwt_seed!, {
      expiresIn: '2h',
    });

    if (!token) throw CustomError.internal('Error to generate token');

    return token;
  }

  async execute(
    refreshTokenUserDto: RefreshTokenUserDto
  ): Promise<UserResponse> {
    const user = await this.authRepository.refreshToken(
      refreshTokenUserDto.userId
    );

    if (!user) throw CustomError.internal('Error creating account');

    const token = await this.generateToken(user);

    return {
      token,
      account: {
        email: user.email,
        profile: user.profile,
        blog: user.blog,
      },
    };
  }
}
