import { envs } from '../../../../common/adapter/env-var';
import { jwtAdapter } from '../../../../common/adapter/jwt';
import { UpdateUserDto } from '../../dtos';
import { UserUpdateEntity } from '../../entities';
import { CustomError } from '../../errors/custom.error';
import { UserRepository } from '../../repositories';
import { GenericUseCase, UserResponse } from '../interface';

export class UpdateUserUseCase
  implements GenericUseCase<UpdateUserDto, UserResponse>
{
  constructor(private readonly userRepository: UserRepository) {}

  private async generateToken(user: UserUpdateEntity) {
    const token = await jwtAdapter.sign({ id: user.id }, envs.jwt_seed!, {
      expiresIn: '2h',
    });

    if (!token) throw CustomError.internal('Error to generate token');

    return token;
  }

  async execute(updateUserDto: UpdateUserDto): Promise<UserResponse> {
    const user = await this.userRepository.update(updateUserDto);

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
