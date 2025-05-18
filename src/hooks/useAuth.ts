import { signInRequest, forgotPasswordRequest } from '../api/auth/authApi';
import { useEffect, useState } from 'react';

export const useAuth = () => {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    setIsAuthenticated(!!token);
    setIsLoading(false);
  }, []);

  const LoginRequest = async (email: string, password: string) => {
    try {
      const token = await signInRequest(email, password);
      localStorage.setItem('auth_token', token);
      return { success: true };
    } catch (err: any) {
      return { success: false, message: err.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setIsAuthenticated(false);
  };

  const forgotPassword = async (email: string) => {
    try {
      const result = await forgotPasswordRequest(email);
      return { success: result };
    } catch (err: any) {
      return { success: false, message: err.message };
    }
  };

  return { 
    LoginRequest,
    isAuthenticated,
    isLoading,
    logout,
    forgotPassword, 
  };
};

