import { JSX } from 'react';
import { SignInForm } from '../../components/auth/SignInForm';
import { useLocation, Link } from 'react-router-dom';

const SignIn = (): JSX.Element => {
  const location = useLocation();
  const from = location.state?.from || '/';

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-80px)] max-w-screen-lg mx-auto shadow-md bg-white overflow-hidden">
      
      <div className="flex flex-col justify-center px-10 py-8">
        <div className="flex items-center gap-2 mb-6">
          <Link to={from} className="text-blue-600 text-sm text-primary hover:underline">
          ← Volver al inicio
          </Link>
            <span className="text-blue-600">|</span>
            <p className="text-blue-600 text-sm font-semibold">Inicia Sesion</p>
        </div>
        <h1 className="text-2xl font-semibold mb-2">Disfruta de nuestra amplia variedad de productos.</h1>
        <p className="text-base text-gray-700 mb-2">
          La clave del éxito está en cada capa de sabor, textura y cuidado artesanal.
        </p>
        <p className="text-sm text-gray-600">
          Recuerda que el autocontrol es ir por el pan y no comerte un poco en el camino de vuelta.
        </p>
      </div>

      <div className="flex flex-col justify-center px-10 py-8 border-l border-gray-300">
        <SignInForm />
      </div>
    </section>
  );
};

export default SignIn;
