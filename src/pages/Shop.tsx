import { useState, useEffect, JSX } from 'react';
import { SidebarFilters } from '../components/SidebarFilters';
import { fetchFilteredProducts } from '../api/productApi';
import { ProductCard } from '../components/ui/ProductCard';
import { Product, Filters } from '../types/product';
import { useLoading } from '../contexts/LoadingContext'; 
import { useNavigate, useLocation } from 'react-router-dom';

const Shop = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialType = (location.state as { type?: string })?.type;
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>(() =>
    initialType ? { type: [initialType] } : {}
  );
  const [sort, setSort] = useState<'ASC' | 'DESC'>('ASC');
  const { startLoading, stopLoading } = useLoading();


  
  useEffect(() => {
    console.log('Filters:', filters);
    startLoading();
    fetchFilteredProducts(filters, 0, 12, sort)
      .then((data) => {
        setProducts(data);
      }
    )
      .catch((err) => console.error('Error fetching products:', err))
      .finally(() => stopLoading());
  }, [filters, sort]);

  useEffect(() => {
    if (initialType) {
      navigate(location.pathname, { replace: true });
    }
  }, [initialType, location.pathname, navigate]);

  return (
    <div className="flex flex-col md:flex-row">
      <SidebarFilters 
        onFilterChange={setFilters} 
        onClearFilters={() => setFilters({})}
        filters={filters}
      />
      <main className="flex-1 p-6">
        
        <div className="flex justify-end mb-6">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as 'ASC' | 'DESC')}
            className="border p-2 rounded"
          >
            <option value="ASC">Precio: Menor a Mayor</option>
            <option value="DESC">Precio: Mayor a Menor</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Shop;