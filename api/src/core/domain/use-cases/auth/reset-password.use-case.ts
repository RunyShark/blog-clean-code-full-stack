import { ResetPasswordUserDto } from '@domain/dtos/auth';
import { GenericUseCase } from '../interface';
import { AuthRepository } from '@domain/repositories';

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
