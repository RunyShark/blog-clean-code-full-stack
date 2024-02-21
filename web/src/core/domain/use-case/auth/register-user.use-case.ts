/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpAdapter } from '../../../../common/adapters/http/http.adapter';
import { AuthMapper } from '../../../infrastructure/mappers/auth/auth.mapper';
import { UserEntity } from '../../entities';
import { CustomError } from '../../errors/custom.error';
import { GenericUseCase } from '../interface';

export class RegisterUserUseCase
  implements GenericUseCase<{ fetcher: HttpAdapter; path: string }, UserEntity>
{
  async execute(args: {
    fetcher: HttpAdapter;
    path: string;
  }): Promise<UserEntity> {
    try {
      const response = await args.fetcher.get(`/${args!.path}`);
      return AuthMapper.toEntity(response as Record<string, any>);
    } catch (error) {
      throw CustomError.internal('Error fetching blogs');
    }
  }
}
