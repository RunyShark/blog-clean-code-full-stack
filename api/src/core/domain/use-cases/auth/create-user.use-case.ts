import { envs } from '../../../../common/adapter/env-var';
import { jwtAdapter } from '../../../../common/adapter/jwt';
import { CreateUserDto } from '../../dtos';
import { UserEntity } from '../../entities';
import { CustomError } from '../../errors/custom.error';
import { AuthRepository } from '../../repositories';
import { GenericUseCase, UserResponse } from '../interface';

export class CreateUserUseCase
  implements GenericUseCase<CreateUserDto, UserResponse>
{
  constructor(private readonly authRepository: AuthRepository) {}

  private async generateToken(user: UserEntity) {
    const token = await jwtAdapter.sign({ id: user.id }, envs.jwt_seed!, {
      expiresIn: '2h',
    });

    if (!token) throw CustomError.internal('Error to generate token');

    return token;
  }

  async execute(createUserDto: CreateUserDto): Promise<UserResponse> {
    const user = await this.authRepository.createAccount(createUserDto);

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
