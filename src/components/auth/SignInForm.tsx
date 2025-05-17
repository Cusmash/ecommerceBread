import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import { ForgotPasswordPanel } from './ForgotPasswordPanel';
import { Button } from '../ui/Button';
import toast from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router-dom';

const SignInSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

type SignInData = z.infer<typeof SignInSchema>;

export const SignInForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInData>({
    resolver: zodResolver(SignInSchema),
  });

  const { LoginRequest } = useAuth();
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string })?.from || '/';

  const onSubmit = async (data: SignInData) => {
    const result = await LoginRequest(data.email, data.password);
  
    if (!result.success) {
      toast.error(result.message || 'Correo o contraseña incorrectos');
    } else {
      toast.success('¡Bienvenido!');
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">Inicias Sesión</h2>

      <p className="text-sm text-gray-600 mb-4">
        ¿Nuevo en Fidencia <span className="font-semibold">Boulangerie</span>?{' '}
        <span className="text-blue-600 hover:underline cursor-pointer">Crear una cuenta</span>
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 border-t pt-4">
        <div>
          <input
            type="email"
            {...register('email')}
            placeholder="Correo electrónico*"
            className="border w-full p-2 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <input
            type="password"
            {...register('password')}
            placeholder="Contraseña*"
            className="border w-full p-2 rounded"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div className="text-right">
          <button
            type="button"
            onClick={() => setShowForgotPassword(true)}
            className="text-sm text-blue-600 hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </button>
        </div>

        <Button type="submit" variant="outline" fullWidth>
          Iniciar sesión
        </Button>
      </form>

      <ForgotPasswordPanel isOpen={showForgotPassword} onClose={() => setShowForgotPassword(false)} />
    </div>
  );
};
