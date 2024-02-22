import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserEntity } from '../../../../domain/entities';

interface AuthState {
  user: UserEntity;
}

const initialState: AuthState = {
  user: {
    id: '',
    email: '',
    password: '',
    accountActive: false,
    profile: {
      firstName: '',
      lastName: '',
      photo: '',
    },
    blog: [],
  },
};

export const webSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession: (state, { payload }: PayloadAction<UserEntity>) => {
      state.user = payload;
    },

    // logout: (state) => {},
  },
});

export const { setSession } = webSlice.actions;

export default webSlice.reducer;
