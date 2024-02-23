import { GenericUseCase, UserResponse } from '../interface';
import { UserRepository } from '@domain/repositories';
import { UserUpdateEntity } from '@domain/entities';
import { envs, jwtAdapter } from '@common/adapter';
import { CustomError } from '@domain/errors/custom.error';
import { UpdateUserDto } from '@domain/dtos';

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
