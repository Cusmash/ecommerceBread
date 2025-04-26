import { useState, useEffect, JSX } from 'react';
import { SidebarFilters } from '../components/SidebarFilters';
import { fetchFilteredProducts } from '../api/productApi';
import { ProductCard } from '../components/ui/ProductCard';
import { Product, Filters } from '../types/product';

const Shop = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>({});

  useEffect(() => {
    console.log('Fetching products with filters:', filters);
    fetchFilteredProducts(filters, 0, 10, 'ASC')
      .then((data) => {
        console.log('Filtered products:', data);
          setProducts(data)
        }
      )
      .catch((err) => console.error('Error fetching products:', err));
  }, [filters]);

  return (
    <div className="flex flex-col md:flex-row">
      <SidebarFilters onFilterChange={setFilters} />
      <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
};

export default Shop;