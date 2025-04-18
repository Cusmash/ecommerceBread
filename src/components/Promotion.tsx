import { JSX } from "react";

export const Promotion = (): JSX.Element => {
    return (
      <section className="py-12 bg-gray-100 text-center px-8">
        <h2 className="text-3xl font-bold mb-4">Freshly Baked Delights Delivered to Your Doorstep</h2>
        <p className="mb-6">Get 10% off your first order and savor the freshness!</p>
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
          Order Now
        </button>
      </section>
    );
  };
  