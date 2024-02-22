/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpAdapter } from '../../../../common/adapters/http/http.adapter';
import { AuthMapper } from '../../../infrastructure/mappers/auth/auth.mapper';
import { CreateUserDto } from '../../dto/auth';
import { UserEntity } from '../../entities';
import { CustomError } from '../../errors/custom.error';
import { GenericUseCase } from '../interface';

interface ExecuteArgs {
  fetcher: HttpAdapter;
  path: string;
  createUserDto: CreateUserDto;
}

interface ResponseApi {
  data: UserEntity;
  state: number;
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
      const response = await fetcher.post<ResponseApi>(`${path}`, {
        ...createUserDto,
      });

      console.log('RegisterUserUseCase', response);

      if (response.state !== 200)
        throw CustomError.internal('Error creating user');

      return AuthMapper.toEntity(response);
    } catch (error) {
      throw CustomError.internal('Error creating user');
    }
  }
}
