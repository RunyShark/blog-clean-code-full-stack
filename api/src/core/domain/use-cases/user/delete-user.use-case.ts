import { DeleteUserDto } from '../../dtos';
import { UserRepository } from '../../repositories';
import { GenericUseCase } from '../interface';

export class DeleteUserUseCase
  implements GenericUseCase<DeleteUserDto, boolean>
{
  constructor(private readonly userRepository: UserRepository) {}

  async execute(deleteUserDto: DeleteUserDto): Promise<boolean> {
    return await this.userRepository.delete(deleteUserDto);
  }
}
