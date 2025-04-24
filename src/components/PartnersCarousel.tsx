import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { JSX } from 'react';

const partners = [
  { name: 'Gourmet Grains', fontClass: 'font-cursive' },
  { name: 'Freshly Baked', fontClass: 'font-bold' },
  { name: "Baker's Delight", fontClass: 'font-cursive' },
  { name: 'Artisan Loaves', fontClass: 'font-cursive' },
  { name: 'Vegan Breads', fontClass: 'font-bold' },
  { name: 'Pastry Masters', fontClass: 'font-cursive' },
];

export const PartnersCarousel = (): JSX.Element => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Our Trusted Partners</h2>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={4000}
        grabCursor={true}
        className="flex items-center"
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-24">
              <span className={`text-2xl ${partner.fontClass}`}>
                {partner.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
