import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { Promotion } from './components/Promotion';
import { Footer } from './components/Footer';
import { JSX } from 'react';
import { ProductsSwiper } from './components/ProductSwiper';
import { PartnersCarousel } from './components/PartnersCarousel';

const App = (): JSX.Element => {
  return (
    <div className="pt-16"> {/* pt-16 para compensar el Navbar fixed */}
      <Navbar />
      <Hero />
      <Categories />
      <ProductsSwiper />
      <Promotion />
      <PartnersCarousel />
      <Footer />
    </div>
  );
};

export default App;
