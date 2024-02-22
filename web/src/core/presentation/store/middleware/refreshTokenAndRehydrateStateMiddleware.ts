/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Middleware,
  MiddlewareAPI,
  Dispatch,
  AnyAction,
} from '@reduxjs/toolkit';
import { REHYDRATE } from 'redux-persist';

import { envs } from '../../../../common/adapters/env';
import { AuthStatus, logout } from '../slices/auth/auth-slice';
import { setLoadingState } from '../slices/web/web-slice';

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

      // try {
      //   const response = await fetch(`${envs.api_url}/auth/refresh-token`, {
      //     method: 'GET',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       Authorization: `Bearer ${state.session.user.token}`,
      //     },
      //   });
      //   console.log('state', response);
      //   if (!response.ok) {
      //     dispatch(logout());
      //     return;
      //   }
      // } catch (error) {
      //   dispatch(logout());
      //   return;
      // } finally {
      //   dispatch(setLoadingState(false));
      // }
    }

    next(action);
  };
