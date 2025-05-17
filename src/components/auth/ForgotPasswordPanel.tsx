import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../ui/Button';
import clsx from 'clsx';
import toast from 'react-hot-toast';

type ForgotPasswordPanelProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ForgotPasswordSchema = z.object({
  email: z.string().email('Email inválido'),
});

type ForgotPasswordData = z.infer<typeof ForgotPasswordSchema>;

export const ForgotPasswordPanel = ({ isOpen, onClose }: ForgotPasswordPanelProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordData>({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const { forgotPassword } = useAuth();

  const onSubmit = async (data: ForgotPasswordData) => {
    try {
      const result = await forgotPassword(data.email);

      if (result.success) {
        toast.success('Se ha enviado un correo de recuperación a tu bandeja de entrada.');
        onClose();
      } else {
        toast.error(
          'Algo salió mal. Intenta más tarde o contacta a nuestra línea de soporte.'
        );
      }
    } catch (err) {
      console.error('Error during forgot password process:', err);
      toast.error(
        'Algo salió mal. Intenta más tarde o contacta a nuestra línea de soporte.'
      );
    }
  };

  return (
    <div
      className={clsx(
        "fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="p-6 flex flex-col h-full">
        <h2 className="text-2xl font-bold mb-4">Recuperar Contraseña</h2>
        <p className="text-sm text-gray-600 mb-6">
          Ingresa tu correo electrónico y te enviaremos instrucciones para recuperar tu contraseña.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 flex-1">
          <input
            type="email"
            {...register('email')}
            placeholder="Correo electrónico"
            className="border p-2 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <div className="flex-1" />
          
          <Button type="submit" variant="primary" fullWidth>
            Enviar instrucciones
          </Button>
          <button
            type="button"
            onClick={onClose}
            className="text-center text-sm text-gray-500 hover:underline mt-2"
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};
