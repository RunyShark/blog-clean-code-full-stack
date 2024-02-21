import { Provider } from 'react-redux';
import { persistor, store } from './core/presentation/store/store';
import { RouterProvider } from 'react-router-dom';
import { router } from './core/presentation/router';
import './core/presentation/style/index.css';
import { PersistGate } from 'redux-persist/integration/react';

export const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
