/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpAdapter } from '../../../../common/adapters/http/http.adapter';
import { AuthMapper } from '../../../infrastructure/mappers/auth/auth.mapper';
import { UpdateProfileDto } from '../../dto/auth/update-profile.user.dto';
import { UserEntity } from '../../entities';
import { CustomError } from '../../errors/custom.error';
import { GenericUseCase } from '../interface';

interface ExecuteArgs {
  fetcher: HttpAdapter;
  updateProfileDto: Partial<UpdateProfileDto>;
}

export class EditProfileUserUseCase
  implements GenericUseCase<ExecuteArgs, UserEntity>
{
  async execute({
    updateProfileDto,
    fetcher,
  }: ExecuteArgs): Promise<UserEntity> {
    try {
      const response = await fetcher.put(`/`, updateProfileDto);
      return AuthMapper.toEntity(response as Record<string, any>);
    } catch (error) {
      throw CustomError.internal('Error fetching blogs');
    }
  }
}
