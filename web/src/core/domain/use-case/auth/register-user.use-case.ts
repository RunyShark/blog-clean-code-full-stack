/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpAdapter } from '../../../../common/adapters/http/http.adapter';
import { AuthMapper } from '../../../infrastructure/mappers/auth/auth.mapper';
import { CreateUserDto } from '../../dto/auth';
import { UserEntity } from '../../entities';
import { CustomError } from '../../errors/custom.error';
import { GenericUseCase, ResponseApiUser } from '../interface';

interface ExecuteArgs {
  fetcher: HttpAdapter;
  path: string;
  createUserDto: CreateUserDto;
}

export class RegisterUserUseCase
  implements GenericUseCase<ExecuteArgs, UserEntity>
{
  async execute({
    fetcher,
    path,
    createUserDto,
  }: ExecuteArgs): Promise<UserEntity> {
    try {
      const response = await fetcher.post<ResponseApiUser>(`${path}`, {
        ...createUserDto,
      });

      if (response.state !== 200)
        throw CustomError.internal('Error creating user');

      const test = AuthMapper.toEntity(response);

      return test;
    } catch (error) {
      throw CustomError.internal('Error creating user');
    }
  }
}
