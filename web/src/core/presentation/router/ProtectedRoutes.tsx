import React from 'react';
import { useAppSelector } from '../store';
import { AuthStatus } from '../store/slices/auth/auth-slice';
import { Navigate } from 'react-router-dom';

interface ProtectedRoutesProps {
  children: React.ReactNode;
}

export const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({
  children,
}) => {
  const {
    authStatus,
    httpControl: { loading },
  } = useAppSelector((state) => state.core.session);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : authStatus === AuthStatus.AUTHENTIC ? (
        <>{children}</>
      ) : (
        <Navigate to="/auth/login" replace />
      )}
    </>
  );
};
