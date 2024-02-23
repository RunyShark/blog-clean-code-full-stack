import { GenericUseCase } from '../interface';
import { UserRepository } from '@domain/repositories';
import { DeleteUserDto } from '@domain/dtos';

export class DeleteUserUseCase
  implements GenericUseCase<DeleteUserDto, boolean>
{
  constructor(private readonly userRepository: UserRepository) {}

  async execute(deleteUserDto: DeleteUserDto): Promise<boolean> {
    return await this.userRepository.delete(deleteUserDto);
  }
}
