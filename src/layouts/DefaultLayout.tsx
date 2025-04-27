import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { useLocation } from 'react-router-dom';

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <>
      <Navbar />
      <main className={`min-h-[80vh] ${!isHome ? 'px-4 max-w-7xl mx-auto pt-24' : 'pt-18'}`}>
        {children}
      </main>
      <Footer />
    </>
  );
};
