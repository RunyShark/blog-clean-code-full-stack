import { createBrowserRouter, Navigate } from 'react-router-dom';
import type { Router } from '@remix-run/router/dist/router';

import {
  HomePage,
  LoginPage,
  RegisterPage,
  MainLayout,
  Details,
} from '../components/web/components';

export const router: Router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/auth',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="login" replace /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },
  {
    path: '/home',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'blog/:id', element: <Details /> },
    ],
  },
  {
    path: '*',
    element: <MainLayout />,
  },
]);
