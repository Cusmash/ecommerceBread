interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    salePrice?: number;
  }
  
  export const ProductCard = ({ product }: { product: Product }) => {
    return (
      <div className="bg-white shadow rounded p-4">
        <div className="relative">
          {product.salePrice && (
            <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">Sale</span>
          )}
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
        </div>
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm">
          {product.salePrice ? (
            <>
              <span className="line-through text-gray-500">${product.price.toFixed(2)}</span>{' '}
              <span className="text-black font-bold">${product.salePrice.toFixed(2)}</span>
            </>
          ) : (
            <span className="text-black font-bold">${product.price.toFixed(2)}</span>
          )}
        </p>
        <button className="text-sm text-blue-600 underline mt-2">Add to cart</button>
      </div>
    );
  };
  