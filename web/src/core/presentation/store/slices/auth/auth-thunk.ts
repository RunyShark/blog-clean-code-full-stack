import { NavigateFunction } from 'react-router-dom';
import { blogFetcher } from '../../../../../common/adapters/http/blogApi.adapter';
import { UpdateUserDto } from '../../../../domain/dto';

import { CreateUserDto, LoginUserDto } from '../../../../domain/dto/auth';
import { CustomError } from '../../../../domain/errors/custom.error';
import {
  LoginUserUseCase,
  RegisterUserUseCase,
} from '../../../../domain/use-case';
import {
  DeleteUserUseCase,
  UpdateUserUseCase,
} from '../../../../domain/use-case/user';
import { AppDispatch, RootState } from '../../store';
import {
  logout,
  resetErrorState,
  setErrorState,
  setLoadingState,
  setSession,
} from './auth-slice';
import { showAlert } from '../Alert/AlertSlice';

class AuthThunk {
  public updateThunk(
    updateUserDto: UpdateUserDto
  ): (dispatch: AppDispatch, getState: () => RootState) => Promise<void> {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
      const { token } = getState().core.session.user;
      try {
        dispatch(setLoadingState(true));
        const response = await new UpdateUserUseCase().execute({
          fetcher: blogFetcher,
          updateUserDto,
          token,
        });

        dispatch(setSession(response));
        dispatch(resetErrorState());
        dispatch(
          showAlert({
            message: 'Usuario actualizado correctamente',
            type: 'success',
          })
        );
      } catch (error) {
        dispatch(
          showAlert({
            message: 'Error al actualizar el usuario',
            type: 'danger',
          })
        );
        dispatch(setErrorState('Error al registrar el usuario: ' + error));
      } finally {
        dispatch(setLoadingState(false));
      }
    };
  }

  public registerThunk(
    createUserDto: CreateUserDto,
    navigate: NavigateFunction
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
        navigate('/profile');
        dispatch(
          showAlert({
            message: 'Se ha registrado correctamente 🚀',
            type: 'success',
          })
        );
      } catch (error) {
        dispatch(setErrorState('Error al registrar el usuario: ' + error));
        dispatch(
          showAlert({
            message: 'Error al registrar el usuario',
            type: 'danger',
          })
        );
      } finally {
        dispatch(setLoadingState(false));
      }
    };
  }

  public loginThunk(
    loginUserDto: LoginUserDto,
    navigate: NavigateFunction
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
        navigate('/profile');
        dispatch(
          showAlert({
            message: 'Bienvenido a tu cuenta 🚀',
            type: 'success',
          })
        );
      } catch (error) {
        dispatch(
          showAlert({
            message: 'Verifica tus credenciales',
            type: 'danger',
          })
        );
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
        dispatch(
          showAlert({
            message: 'Se ha eliminado la cuenta correctamente',
            type: 'success',
          })
        );
      } catch (error) {
        dispatch(
          showAlert({
            message: 'Error al eliminar la cuenta',
            type: 'danger',
          })
        );
        dispatch(setErrorState('Error al iniciar sesión: ' + error));
      } finally {
        dispatch(setLoadingState(false));
      }
    };
  }
}

export const authThunk = new AuthThunk();
