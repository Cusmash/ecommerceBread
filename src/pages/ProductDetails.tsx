import { useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../types/product';
import { fetchProductById } from '../api/productApi';
import { useLoading } from '../contexts/LoadingContext';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const { startLoading, stopLoading } = useLoading();
  const location = useLocation();

  const from = (location.state as { from?: string })?.from || '/shop';

  useEffect(() => {
    const loadProduct = async () => {
      startLoading();
      if (id) {
        try {
          const fetchedProduct = await fetchProductById(id);
          setProduct(fetchedProduct);
          // if (fetchedProduct?.type) {
          //   const similar = await fetchProductsByType(fetchedProduct.type);
          //   setSimilarProducts(similar.filter(p => p.id !== fetchedProduct.id).slice(0, 3));
          // }
        } catch (error) {
          console.error('Error loading product:', error);
        } finally {
          stopLoading();
        }
      }
    };

    loadProduct();
  }, [id]);

  if (!product) return null;

  const discountedPrice = (
    product.price - (product.price * (product.discountPercentage || 0)) / 100
  ).toFixed(2);

  const handleAddToCart = () => {
    console.log(`Agregado al carrito: ${quantity} x ${product.name}`);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Math.min(Number(e.target.value), product.quantity));
    setQuantity(value);
  };

  return (
    <section className="py-12">
      <div className="flex items-center gap-2 mb-6">
        <Link to={from} className="text-sm text-primary hover:underline">
          ← Volver
        </Link>
        <span className="text-gray-400">|</span>
        <p className="text-sm font-semibold">{product.name}</p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="w-full">
          <div className="relative">
            <img
              src={product.imgUrl}
              alt={product.name}
              className="rounded-lg object-cover w-full max-h-[500px]"
            />
          </div>
        </div>

        <div className="flex flex-col justify-start">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          <p className="text-2xl font-semibold text-green-700 mb-6">
            {product.onSale ? (
              <>
                <span className="line-through text-gray-400 mr-2">${product.price.toFixed(2)}</span>
                ${discountedPrice}
              </>
            ) : (
              `$${product.price.toFixed(2)}`
            )}
          </p>

          <div className="flex items-center gap-4 mb-6">
            <input
              type="number"
              min={1}
              max={product.quantity}
              value={quantity}
              onChange={handleQuantityChange}
              className="border p-2 w-20 rounded text-center"
            />
            <Button variant="primary" onClick={handleAddToCart}>
              Agregar al carrito
            </Button>
          </div>

          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>

      {similarProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">También te podría gustar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {similarProducts.map(similar => (
              <ProductCard key={similar.id} product={similar} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;
