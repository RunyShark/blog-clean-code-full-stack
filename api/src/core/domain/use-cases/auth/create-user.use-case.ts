import { CreateUserDto } from '@domain/dtos/auth';
import { GenericUseCase, UserResponse } from '../interface';
import { AuthRepository } from '@domain/repositories';

export class CreateUserUseCase
  implements GenericUseCase<CreateUserDto, UserResponse>
{
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(createUserDto: CreateUserDto): Promise<UserResponse> {
    this.authRepository.createAccount(createUserDto);
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
