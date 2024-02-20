import { LoginUserDto } from '@domain/dtos/auth';
import { GenericUseCase, UserResponse } from '../interface';
import { AuthRepository } from '@domain/repositories';

export class RefreshTokenUseCase implements GenericUseCase<{}, UserResponse> {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(): Promise<UserResponse> {
    this.authRepository.refreshToken();
    return {
      token: '',
      account: {
        firstName: '',
        lastName: '',
        email: '',
        profile: {
          firstNames: '',
          lastNames: '',
          photo: '',
        },
        blog: [
          {
            title: '',
            author: '',
            content: '',
            imgUrl: '',
            createdAt: '',
          },
        ],
      },
    };
  }
}
