import { Provider } from 'react-redux';
import { store } from './core/presentation/store/store';
import { RouterProvider } from 'react-router-dom';
import { router } from './core/presentation/router';

export const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
