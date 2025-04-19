import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import { JSX } from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  salePrice?: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Focaccia Bread",
    image: "/images/products/swiper1.jpg",
    price: 4.99,
  },
  {
    id: 2,
    name: "Ciabatta Bread",
    image: "/images/products/swiper2.jpg",
    price: 4.29,
  },
  {
    id: 3,
    name: "French Baguette",
    image: "/images/products/swiper3.jpg",
    price: 7.49,
    salePrice: 2.62,
  },
  {
    id: 4,
    name: "Artisan Loaf",
    image: "/images/products/swiper4.jpg",
    price: 5.99,
    salePrice: 3.49,
  },
  {
    id: 5,
    name: "Rye Bread",
    image: "/images/products/swiper5.jpg",
    price: 6.29,
  },
  {
    id: 6,
    name: "Sourdough Bread",
    image: "/images/products/swiper6.jpg",
    price: 6.99,
    salePrice: 4.99,
  },
];

export const ProductsSwiper = (): JSX.Element => {
  return (
    <section className="py-12 px-8">
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
            <div className="rounded-lg shadow-md overflow-hidden bg-white">
              <div className="relative">
                {product.salePrice && (
                  <div className="absolute top-2 left-2 bg-black text-white text-sm px-2 py-1 rounded">
                    Sale
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="mt-2">
                  {product.salePrice ? (
                    <>
                      <span className="line-through text-gray-500 mr-2">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-black font-bold">
                        ${product.salePrice.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-black font-bold">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </p>
                <button className="mt-4 text-sm text-gray-700 underline hover:text-gray-900 transition">
                  Add to cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
