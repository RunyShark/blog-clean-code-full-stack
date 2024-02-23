import { blogFetcher } from '../../../../../common/adapters/http/blogApi.adapter';

import { CreateUserDto, LoginUserDto } from '../../../../domain/dto/auth';
import { CustomError } from '../../../../domain/errors/custom.error';
import {
  LoginUserUseCase,
  RegisterUserUseCase,
} from '../../../../domain/use-case';
import { DeleteUserUseCase } from '../../../../domain/use-case/user';
import { AppDispatch, RootState } from '../../store';
import {
  logout,
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

  public deleteThunk(): (
    dispatch: AppDispatch,
    getState: () => RootState
  ) => Promise<void> {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
      const { token } = getState().core.session.user;
      try {
        dispatch(setLoadingState(true));
        const response = await new DeleteUserUseCase().execute({
          fetcher: blogFetcher,
          token,
        });

        if (!response)
          throw CustomError.badRequest('Error al eliminar la cuenta');

        dispatch(logout());
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
