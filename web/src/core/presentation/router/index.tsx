import { createBrowserRouter, Navigate } from 'react-router-dom';
import type { Router } from '@remix-run/router/dist/router';

import {
  HomePage,
  LoginPage,
  RegisterPage,
  MainLayout,
  Details,
  ProfilePage,
} from '../components/web/components';
import { ProtectedRoutes } from './ProtectedRoutes';
import { ProtectedAuthRoutes } from './ProtectedAuthRoutes';

export const router: Router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/auth',
    element: (
      <ProtectedAuthRoutes>
        <MainLayout />
      </ProtectedAuthRoutes>
    ),
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoutes>
        <MainLayout />
      </ProtectedRoutes>
    ),
    children: [{ index: true, element: <ProfilePage /> }],
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
    element: <Navigate to="/home" replace />,
  },
]);
