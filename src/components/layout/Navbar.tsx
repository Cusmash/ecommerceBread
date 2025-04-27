import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { JSX } from "react";

export const Navbar = (): JSX.Element => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/shop?search=${searchTerm}`);
      setSearchOpen(false);
      setSearchTerm('');
    }
  };

    return (
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-gray-200 flex justify-between items-center py-4 px-8 z-50">
        <Link to="/" className="text-2xl font-bold hover:text-yellow-300">
          Fidencia Boulangerie
        </Link>
        <ul className="flex gap-6">
          <li className="hover:text-yellow-300 cursor-pointer">Nosotros</li>
          <li className="hover:text-yellow-300 cursor-pointer">Sucursales</li>
          <li className="hover:text-yellow-300 cursor-pointer">Promociones</li>
          <li className="hover:text-yellow-300 cursor-pointer">Lo Nuevo</li>
          <Link to="/shop" className="hover:text-yellow-300">
            Compra Aquí
          </Link>
        </ul>
        <div className="flex gap-4 items-center">
        <button onClick={() => setSearchOpen(!searchOpen)} className="hover:text-yellow-300">
          🔍
        </button>

        {searchOpen && (
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-2 py-1 rounded text-black"
            />
            <button type="submit" className="text-sm hover:text-yellow-300">
              Buscar
            </button>
          </form>
        )}

        <button className="hover:text-yellow-300">Login</button>
        <button className="hover:text-yellow-300">🛒</button>
      </div>
      </nav>
    );
  };
  