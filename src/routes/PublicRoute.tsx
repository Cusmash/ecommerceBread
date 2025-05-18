import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { JSX } from 'react';
import { Spinner } from '../components/ui/Spinner';

export const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <Spinner />;

  return !isAuthenticated ? children : <Navigate to="/profile/userDetails" replace />;
};
