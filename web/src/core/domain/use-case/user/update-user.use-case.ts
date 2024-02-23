import { HttpAdapter } from '../../../../common/adapters/http/http.adapter';
import { AuthMapper } from '../../../infrastructure/mappers/auth/auth.mapper';
import { UpdateUserDto } from '../../dto';
import { UserEntity } from '../../entities';
import { CustomError } from '../../errors/custom.error';
import { GenericUseCase } from '../interface';

interface ExecuteArgs {
  fetcher: HttpAdapter;
  updateUserDto: Partial<UpdateUserDto>;
  token: string;
}

interface ResponseApi {
  data: UserEntity[];
  state: number;
}

export class UpdateUserUseCase
  implements GenericUseCase<ExecuteArgs, UserEntity>
{
  async execute({
    fetcher,
    updateUserDto,
    token,
  }: ExecuteArgs): Promise<UserEntity> {
    try {
      const response = await fetcher.put<ResponseApi>(
        'user/account',
        { ...updateUserDto },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.state !== 200)
        throw CustomError.internal('Error fetching Users');

      return AuthMapper.toEntity(response);
    } catch (error) {
      throw CustomError.internal('Error fetching Users');
    }
  }
}
