import React from 'react';
import { useAppSelector } from '../store';
import { AuthStatus } from '../store/slices/auth/auth-slice';
import { Navigate } from 'react-router-dom';

interface ProtectedRoutesProps {
  children: React.ReactNode;
}

export const ProtectedAuthRoutes: React.FC<ProtectedRoutesProps> = ({
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
      ) : authStatus === AuthStatus.NOT_AUTHENTIC ? (
        <>{children}</>
      ) : (
        <Navigate to="/profile" replace />
      )}
    </>
  );
};
