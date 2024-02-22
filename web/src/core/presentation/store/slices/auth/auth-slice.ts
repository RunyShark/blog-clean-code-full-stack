import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserEntity } from '../../../../domain/entities';

enum AuthStatus {
  AUTHENTIC,
  NOT_AUTHENTIC,
}

interface AuthState {
  authStatus: AuthStatus;
  user: UserEntity;
  httpControl: HttpControl;
}
interface HttpControl {
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

const initialState: AuthState = {
  authStatus: AuthStatus.NOT_AUTHENTIC,
  user: {
    token: '',
    account: {
      email: '',
      profile: {
        firstName: '',
        lastName: '',
        photo: '',
      },
      blog: [],
    },
  },
  httpControl: {
    loading: false,
    error: false,
    errorMessage: '',
  },
};

export const webSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession: (state, { payload }: PayloadAction<UserEntity>) => {
      state.user = payload;
      state.authStatus = AuthStatus.AUTHENTIC;
    },

    setLoadingState: (state, { payload }: PayloadAction<boolean>) => {
      state.httpControl.loading = payload;
    },

    setErrorState: (state, { payload }: PayloadAction<string>) => {
      state.httpControl.error = true;
      state.httpControl.errorMessage = payload;
    },

    resetErrorState: (state) => {
      state.httpControl.error = false;
      state.httpControl.errorMessage = '';
    },
  },
});

export const { setSession, setLoadingState, setErrorState, resetErrorState } =
  webSlice.actions;

export default webSlice.reducer;
