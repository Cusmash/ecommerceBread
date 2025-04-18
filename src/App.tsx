import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { Promotion } from './components/Promotion';
import { Footer } from './components/Footer';
import { JSX } from 'react';

const App = (): JSX.Element => {
  return (
    <div className="pt-16"> {/* pt-16 para compensar el Navbar fixed */}
      <Navbar />
      <Hero />
      <Categories />
      <Promotion />
      <Footer />
    </div>
  );
};

export default App;
