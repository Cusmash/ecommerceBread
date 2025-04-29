import { JSX, useEffect, useState } from 'react';
import { Button } from '../ui/Button';

interface Slide {
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

const slides: Slide[] = [
  {
    image: '/images/slider1.jpg',
    title: 'Experience the Art of Baking',
    description: 'At Fidencia Boulangerie, we\'re passionate about delivering the freshest, most delicious breads right to your doorstep. Explore our wide selection of artisan loaves, breakfast treats and more',
    buttonText: 'Shop Now',
  },
  {
    image: '/images/slider2.jpg',
    title: 'Vegan Delights Await You',
    description: 'Discover our range of vegan breads, crafted with the finest plant-based ingredients. Enjoy the same great taste and texture without compromising your dietary choices.',
    buttonText: 'View More',
  },
  {
    image: '/images/slider3.jpg',
    title: 'Perfect for Special Occasions',
    description: 'Celebrate life\'s moments with our exquisite selection of breads perfect for any special ocassion. From elegant brioche to festive pastries, we have something for every celebration.',
    buttonText: 'Explore',
  },
];

export const Hero = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { image, title, description, buttonText } = slides[currentSlide];

  return (
    <section
      className="h-screen bg-cover bg-center flex items-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-black bg-opacity-50 text-white p-8 rounded-xl max-w-xl ml-10">
        <h2 className="text-4xl font-bold mb-4 transition-opacity duration-500">
          {title}
        </h2>
        <p className="mb-6 transition-opacity duration-500">
          {description}
        </p>
        <Button size="lg" variant="light">
          Comprar ahora
        </Button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              currentSlide === index ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
