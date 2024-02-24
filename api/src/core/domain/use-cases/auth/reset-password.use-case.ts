import { ResetPasswordUserDto } from '../../dtos';
import { AuthRepository } from '../../repositories';
import { GenericUseCase } from '../interface';

export class ResetPasswordUseCase
  implements GenericUseCase<ResetPasswordUserDto, { token: string }>
{
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(id: ResetPasswordUserDto): Promise<{ token: string }> {
    return {
      token: '',
    };
  }
}
