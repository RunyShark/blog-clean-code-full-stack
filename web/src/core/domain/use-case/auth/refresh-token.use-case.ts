/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpAdapter } from '../../../../common/adapters/http/http.adapter';
import { AuthMapper } from '../../../infrastructure/mappers/auth/auth.mapper';
import { UserEntity } from '../../entities';
import { CustomError } from '../../errors/custom.error';
import { GenericUseCase, ResponseApiUser } from '../interface';

interface ExecuteArgs {
  fetcher: HttpAdapter;
  token: string;
}

export class RefreshTokenUseCase
  implements GenericUseCase<ExecuteArgs, UserEntity>
{
  async execute({ fetcher, token }: ExecuteArgs): Promise<UserEntity> {
    try {
      const response = await fetcher.get<ResponseApiUser>(
        '/auth/refreshToken',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.state !== 200)
        throw CustomError.internal('Error creating user');

      return AuthMapper.toEntity(response);
    } catch (error) {
      throw CustomError.internal('Error creating user');
    }
  }
}
