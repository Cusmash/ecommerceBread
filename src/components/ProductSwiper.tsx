import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Product } from '../types/product';
import { fetchFilteredProducts } from '../api/productApi';
import { JSX } from 'react/jsx-runtime';
import { ProductCard } from './ui/ProductCard';

export const ProductSwiper = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const filters = { onSale: true };
    fetchFilteredProducts(filters, 0, 6, 'DESC')
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      grabCursor={true}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {products.map((product) => (
      <SwiperSlide key={product.id}>
        <ProductCard product={product} />
      </SwiperSlide>
      ))}
    </Swiper>
  );
};
