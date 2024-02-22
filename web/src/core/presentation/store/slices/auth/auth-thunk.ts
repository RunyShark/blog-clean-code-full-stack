import { blogFetcher } from '../../../../../common/adapters/http/blogApi.adapter';
import { CreateUserDto } from '../../../../domain/dto/auth';
import { RegisterUserUseCase } from '../../../../domain/use-case';
import { AppDispatch } from '../../store';
import { setSession } from './auth-slice';

class AuthThunk {
  public registerThunk(
    createUserDto: CreateUserDto
  ): (dispatch: AppDispatch) => Promise<void> {
    return async (dispatch: AppDispatch) => {
      const response = await new RegisterUserUseCase().execute({
        fetcher: blogFetcher,
        path: '/auth/register',
        createUserDto,
      });

      dispatch(setSession(response));
    };
  }
}

export const authThunk = new AuthThunk();
