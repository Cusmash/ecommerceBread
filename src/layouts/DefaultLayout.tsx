import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-[80vh]">{children}</main>
      <Footer />
    </>
  );
};
