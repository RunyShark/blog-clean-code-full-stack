import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const webSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession: (state) => {},

    logout: (state) => {},
  },
});

export const { setSession, logout } = webSlice.actions;

export default webSlice.reducer;
