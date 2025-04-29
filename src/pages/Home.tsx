import { Hero } from '../components/categories/Hero';
import { ProductSwiper } from '../components/products/ProductSwiper';
import { Promotion } from '../components/categories/Promotion';
import { PartnersCarousel } from '../components/PartnersCarousel';
import { JSX } from 'react';
import { Categories } from '../components/categories/Categories';

const Home = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Categories />
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">On Sale Products</h2>
        <ProductSwiper />
      </section>
      <Promotion />
      <PartnersCarousel />
    </>
  );
};

export default Home;
