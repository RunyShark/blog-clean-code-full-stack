import { CreateUserDto } from '@domain/dtos/auth';
import { GenericUseCase, UserResponse } from '../interface';
import { AuthRepository } from '@domain/repositories';

export class CreateUserUseCase
  implements GenericUseCase<CreateUserDto, UserResponse>
{
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(createUserDto: CreateUserDto): Promise<UserResponse> {
    const { accountActive, blog, email, id, password, profile } =
      await this.authRepository.createAccount(createUserDto);

    return {
      token: 'test',
      account: {
        email,
        profile,
        blog,
      },
    };
  }
}
