import { HttpAdapter } from '../../../../common/adapters/http/http.adapter';
import { JWT, jwtAdapter } from '../../../../common/adapters/jwt';
import { AuthMapper } from '../../../infrastructure/mappers/auth/auth.mapper';

import { UserEntity } from '../../entities';
import { CustomError } from '../../errors/custom.error';
import { GenericUseCase } from '../interface';

interface ExecuteArgs {
  fetcher: HttpAdapter;
  token: string;
}

interface ResponseApi {
  data: UserEntity[];
  state: number;
}

export class DeleteUserUseCase
  implements GenericUseCase<ExecuteArgs, UserEntity>
{
  async execute({ fetcher, token }: ExecuteArgs): Promise<UserEntity> {
    try {
      const decode = JWT.decode(token);

      console.log(decode);

      const response = await fetcher.delete<ResponseApi>(
        `web/user/${'userId'}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.state !== 200)
        throw CustomError.internal('Error fetching Users');

      return AuthMapper.toEntity(response.data);
    } catch (error) {
      throw CustomError.internal('Error fetching Users');
    }
  }
}
