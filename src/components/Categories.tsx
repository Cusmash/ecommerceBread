import { JSX } from "react";
import { Button } from "./ui/Button";

interface Categories {
    image: string;
    title: string;
    buttonText: string;
  }

  const categories: Categories[] = [
    {
      image: '/images/baked-goods.jpg',
      title: 'Baked goods',
      buttonText: 'Shop Now',
    },
    {
      image: '/images/bread.jpg',
      title: 'Bread',
      buttonText: 'Shop Now'
    },
    {
      image: '/images/pastries.jpg',
      title: 'Pastries',
      buttonText: 'Shop Now'
    },
  ];
  
  export const Categories = (): JSX.Element => {
    return (
      <section className="py-10 px-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Explore Our Bread Categories</h2>
        <p className="text-center mb-8">Discover a variety of breads tailored to your needs.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((bread) => (
            <div
              key={bread.title}
              className="relative bg-cover bg-center h-64 rounded-lg overflow-hidden shadow-md"
              style={{ backgroundImage: `url(${bread.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
                <h3 className="text-white text-2xl font-semibold">{bread.title}</h3>
                <hr></hr>
                <Button variant="light" size="md">
                  {bread.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  