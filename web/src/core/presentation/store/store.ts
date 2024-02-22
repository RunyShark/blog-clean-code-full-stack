import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { core } from './slices/reducers';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    core,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(thunk),
});

/**
 * Type definition for the state shape of the store.
 * @typedef {ReturnType<typeof store.getState>} RootState
 */
export type RootState = ReturnType<typeof store.getState>;

// Persistor to enable state persistence
export const persistor = persistStore(store);

/**
 * Type definition for the dispatch method of the store.
 * @typedef {typeof store.dispatch} AppDispatch
 */
export type AppDispatch = typeof store.dispatch;
