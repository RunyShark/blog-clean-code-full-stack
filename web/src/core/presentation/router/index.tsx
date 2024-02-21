import { createBrowserRouter, Navigate } from 'react-router-dom';
import type { Router } from '@remix-run/router/dist/router';

export const router: Router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/auth',
    element: <h1>auth</h1>,
  },
  {
    path: '/home',
    element: <h1>Home</h1>,
  },
  {
    path: '*',
    element: <h1>page not found</h1>,
  },
]);
