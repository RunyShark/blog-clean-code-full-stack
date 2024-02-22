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
        email: '',
        profile: {
          firstName: '',
          lastName: '',
          photo: '',
        },
        blog: [
          {
            title: '',
            author: '',
            content: '',
            imgUrl: '',
            dateOfPublication: '',
          },
        ],
      },
    };
  }
}
