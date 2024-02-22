/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Middleware,
  MiddlewareAPI,
  Dispatch,
  AnyAction,
} from '@reduxjs/toolkit';
import { REHYDRATE } from 'redux-persist';

import { AuthStatus, logout, setSession } from '../slices/auth/auth-slice';
import { setLoadingState } from '../slices/web/web-slice';

import { RefreshTokenUseCase } from '../../../domain/use-case';
import { blogFetcher } from '../../../../common/adapters/http/blogApi.adapter';

export const refreshTokenAndRehydrateStateMiddleware: Middleware =
  ({ getState, dispatch }: MiddlewareAPI<Dispatch<AnyAction>>) =>
  (next: Dispatch<AnyAction>) =>
  async (action: AnyAction) => {
    if (action.type === REHYDRATE) {
      const state = action.payload;

      if (!state) {
        next(action);
        return;
      }

      if (state.session.authStatus === AuthStatus.NOT_AUTHENTIC) {
        next(action);
        dispatch(logout());
        return;
      }

      if (!state.session.user.token) {
        dispatch(logout());
        return;
      }

      dispatch(setLoadingState(true));

      try {
        const response = await new RefreshTokenUseCase().execute({
          fetcher: blogFetcher,
          token: state.session.user.token,
        });

        if (!response) {
          dispatch(logout());
          return;
        }

        dispatch(setSession(response));
      } catch (error) {
        dispatch(logout());
        return;
      } finally {
        dispatch(setLoadingState(false));
      }
    }

    next(action);
  };
