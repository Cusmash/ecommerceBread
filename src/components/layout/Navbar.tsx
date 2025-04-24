import { JSX } from "react";

export const Navbar = (): JSX.Element => {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-black text-white flex justify-between items-center py-4 px-8 z-50">
        <h1 className="text-2xl font-bold">Fidencia Boulangerie</h1>
        <ul className="flex gap-6">
          <li className="hover:text-yellow-300 cursor-pointer">Baked Goods</li>
          <li className="hover:text-yellow-300 cursor-pointer">Bread</li>
          <li className="hover:text-yellow-300 cursor-pointer">Pastries</li>
          <li className="hover:text-yellow-300 cursor-pointer">Artisan Breads</li>
          <li className="hover:text-yellow-300 cursor-pointer">Breakfast Treats</li>
          <li className="hover:text-yellow-300 cursor-pointer">Special Occasions</li>
        </ul>
        <div className="flex gap-4">
          <button className="hover:text-yellow-300">Login</button>
          <button className="hover:text-yellow-300">🛒</button>
        </div>
      </nav>
    );
  };
  