import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Product } from '../types/product';
import { fetchProductsPaged } from '../api/productApi';
import { JSX } from 'react/jsx-runtime';

export const ProductSwiper = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductsPaged(0, 6, 'DESC')
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading products:', err);
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
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="bg-white shadow rounded p-4">
            <div className="relative">
              {product.salePrice && (
                <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                  Sale
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
            </div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm">
              {product.salePrice ? (
                <>
                  <span className="line-through text-gray-500">${product.price.toFixed(2)}</span>{' '}
                  <span className="text-black font-bold">${product.salePrice.toFixed(2)}</span>
                </>
              ) : (
                <span className="text-black font-bold">${product.price.toFixed(2)}</span>
              )}
            </p>
            <button className="text-sm text-blue-600 underline mt-2">
              Add to cart
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
