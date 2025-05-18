import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import toast from 'react-hot-toast';

type UserDetails = {
  firstName: string;
  lastName: string;
};

const Profile = () => {
  const [user, setUser] = useState<UserDetails | null>(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = {
          firstName: 'Iori',
          lastName: 'Cusmash',
        };
        setUser(response);
      } catch (err) {
        toast.error('No se pudieron obtener los datos del usuario');
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    logout();
    toast.success('Sesión cerrada');
    navigate('/');
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Perfil de Usuario</h1>

      {user ? (
        <div className="space-y-4">
          <p>
            <span className="font-semibold">Nombre:</span> {user.firstName}
          </p>
          <p>
            <span className="font-semibold">Apellido:</span> {user.lastName}
          </p>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Cerrar sesión
          </button>
        </div>
      ) : (
        <p>Cargando información del usuario...</p>
      )}
    </div>
  );
};

export default Profile;
