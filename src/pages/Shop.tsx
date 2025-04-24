import { JSX, useState } from 'react';
import { SidebarFilters } from '../components/SidebarFilters';
import { ProductCard } from '../components/ProductCart';
import { Pagination } from '../components/Pagination';

const allProducts = [
  { id: 1, name: 'Artisan Bread', image: '/images/bread1.jpg', price: 5.99 },
  { id: 2, name: 'Sourdough Loaf', image: '/images/bread2.jpg', price: 6.99 },
  { id: 3, name: 'Whole Wheat Bread', image: '/images/bread3.jpg', price: 4.99 },
  { id: 4, name: 'Rye Bread', image: '/images/bread4.jpg', price: 7.49 },
  { id: 5, name: 'Ciabatta', image: '/images/bread5.jpg', price: 5.49 },
  { id: 6, name: 'Focaccia', image: '/images/bread6.jpg', price: 6.49 },
];

export const Shop = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <section className="pt-20 px-8 flex gap-8">
      <SidebarFilters />
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-6">Bread</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Pagination
          totalItems={allProducts.length}
          itemsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
};
