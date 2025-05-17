import { signInRequest, forgotPasswordRequest } from '../api/auth/authApi';

export const useAuth = () => {
  
  const LoginRequest = async (email: string, password: string) => {
    try {
      const token = await signInRequest(email, password);
      localStorage.setItem('auth_token', token);
      return { success: true };
    } catch (err: any) {
      return { success: false, message: err.message };
    }
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
    forgotPassword, 
  };
};

