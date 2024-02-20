import { LoginUserDto } from '@domain/dtos/auth';
import { GenericUseCase, UserResponse } from '../interface';
import { AuthRepository } from '@domain/repositories';

export class LoginUserUseCase
  implements GenericUseCase<LoginUserDto, UserResponse>
{
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(loginUserDto: LoginUserDto): Promise<UserResponse> {
    this.authRepository.login(loginUserDto);
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
