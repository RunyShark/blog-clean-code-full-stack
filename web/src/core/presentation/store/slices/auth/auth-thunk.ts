import { blogFetcher } from '../../../../../common/adapters/http/blogApi.adapter';
import { CreateUserDto, LoginUserDto } from '../../../../domain/dto/auth';
import {
  LoginUserUseCase,
  RegisterUserUseCase,
} from '../../../../domain/use-case';
import { AppDispatch } from '../../store';
import {
  resetErrorState,
  setErrorState,
  setLoadingState,
  setSession,
} from './auth-slice';

class AuthThunk {
  public registerThunk(
    createUserDto: CreateUserDto
  ): (dispatch: AppDispatch) => Promise<void> {
    return async (dispatch: AppDispatch) => {
      try {
        dispatch(setLoadingState(true));
        const response = await new RegisterUserUseCase().execute({
          fetcher: blogFetcher,
          createUserDto,
        });

        dispatch(setSession(response));
        dispatch(resetErrorState());
      } catch (error) {
        dispatch(setErrorState('Error al registrar el usuario: ' + error));
      } finally {
        dispatch(setLoadingState(false));
      }
    };
  }

  public loginThunk(
    loginUserDto: LoginUserDto
  ): (dispatch: AppDispatch) => Promise<void> {
    return async (dispatch: AppDispatch) => {
      try {
        dispatch(setLoadingState(true));
        const response = await new LoginUserUseCase().execute({
          fetcher: blogFetcher,
          loginUserDto,
        });

        dispatch(setSession(response));
        dispatch(resetErrorState());
      } catch (error) {
        dispatch(setErrorState('Error al iniciar sesión: ' + error));
      } finally {
        dispatch(setLoadingState(false));
      }
    };
  }
}

export const authThunk = new AuthThunk();
