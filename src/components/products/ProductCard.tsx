import { Link, useLocation } from 'react-router-dom';
import { Product } from '../../types/product';
import { Button } from '../ui/Button';

export const ProductCard = ({ product }: { product: Product }) => {
  const discountedPrice = (
    product.price - (product.price * (product.discountPercentage || 0)) / 100
  ).toFixed(2);

  const handleAddToCart = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e?.stopPropagation();
    e?.preventDefault();
    console.log(`Agregado al carrito: ${product.name}`);
  };

  return (
    <div className="bg-white shadow rounded p-4 hover:shadow-lg transition">
      <Link 
        to={`/product/${product.id}`} 
        state={{ from: location.pathname }}
        className="block"
      >
        <div className="relative">
          {product.onSale && (
            <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
              Sale
            </span>
          )}
          <img
            src={product.imgUrl}
            alt={product.name}
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
          <p className="text-sm mb-2">
            {product.onSale ? (
              <>
                <span className="line-through text-gray-500">${product.price.toFixed(2)}</span>{' '}
                <span className="text-black font-bold">${discountedPrice}</span>
              </>
            ) : (
              <span className="text-black font-bold">${product.price.toFixed(2)}</span>
            )}
          </p>
        </div>
      </Link>

      <Button
        variant="primary"
        size="sm"
        fullWidth
        onClick={handleAddToCart}
        className="mt-2"
      >
        Agregar al carrito
      </Button>
    </div>
  );
};
