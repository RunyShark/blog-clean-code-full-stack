/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpAdapter } from '../../../../common/adapters/http/http.adapter';
import { AuthMapper } from '../../../infrastructure/mappers/auth/auth.mapper';
import { LoginUserDto } from '../../dto/auth';
import { UserEntity } from '../../entities';
import { CustomError } from '../../errors/custom.error';
import { GenericUseCase, ResponseApiUser } from '../interface';

interface ExecuteArgs {
  fetcher: HttpAdapter;
  path: string;
  loginUserDto: LoginUserDto;
}

export class LoginUserUseCase
  implements GenericUseCase<ExecuteArgs, UserEntity>
{
  async execute({
    loginUserDto,
    fetcher,
    path,
  }: ExecuteArgs): Promise<UserEntity> {
    try {
      const response = await fetcher.post<ResponseApiUser>(`${path}`, {
        ...loginUserDto,
      });

      if (response.state !== 200)
        throw CustomError.internal('Error logging in');

      const test = AuthMapper.toEntity(response);

      return test;
    } catch (error) {
      throw CustomError.internal('Error logging in');
    }
  }
}
