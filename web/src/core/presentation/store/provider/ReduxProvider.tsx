'use client';
import React from 'react';
import { persistor, store } from '../store';
import { BaseComponentProps } from '@/core/interface';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export const ReduxProvider: React.FC<Pick<BaseComponentProps, 'children'>> = ({
  children,
}) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);
