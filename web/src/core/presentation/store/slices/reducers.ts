import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import webSlice from './web/web-slice';
import authSlice from './auth/auth-slice';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'blog',
  storage,
};

const slices = combineReducers({
  web: webSlice,
  session: authSlice,
});

export const core = persistReducer(persistConfig, slices);
