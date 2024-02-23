import { HttpAdapter } from '../../../../common/adapters/http/http.adapter';
import { AuthMapper } from '../../../infrastructure/mappers/auth/auth.mapper';
import { DeleteUserDto } from '../../dto';
import { UserEntity } from '../../entities';
import { CustomError } from '../../errors/custom.error';
import { GenericUseCase } from '../interface';

interface ExecuteArgs extends DeleteUserDto {
  fetcher: HttpAdapter;
  token: string;
}

interface ResponseApi {
  data: UserEntity[];
  state: number;
}

export class CreateUserUseCase
  implements GenericUseCase<ExecuteArgs, UserEntity>
{
  async execute({ fetcher, userId, token }: ExecuteArgs): Promise<UserEntity> {
    try {
      const response = await fetcher.delete<ResponseApi>(`web/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.state !== 200)
        throw CustomError.internal('Error fetching Users');

      return AuthMapper.toEntity(response.data);
    } catch (error) {
      throw CustomError.internal('Error fetching Users');
    }
  }
}
