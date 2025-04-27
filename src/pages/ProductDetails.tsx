import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../types/product';
import { fetchProductById } from '../api/productApi';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      fetchProductById(id)
        .then((data) => setProduct(data))
        .catch((err) => console.error('Error loading product:', err));
    }
  }, [id]);

  if (!product) return <p className="text-center mt-10">Cargando producto...</p>;

  const discountedPrice = (
    product.price - (product.price * (product.discountPercentage || 0)) / 100
  ).toFixed(2);

  return (
    <section className="pt-20 px-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img src={product.imgUrl} alt={product.name} className="w-full md:w-1/2 h-auto object-cover rounded" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-green-700 font-semibold mb-4">
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
              min="1"
              defaultValue="1"
              className="border p-2 w-20 rounded"
            />
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
              Agregar al carrito
            </button>
          </div>

          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>

    </section>
  );
};

export default ProductDetails;
