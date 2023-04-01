import { useCartContext } from "@/features/cart/hooks";
import { type Product } from "@/features/products/types/product";

import Image from "next/image";
import { useCart } from "../cart/hooks/useCart";
import { useProducts } from "./hooks/use-products";

export const ProductList = () => {
  const { addItem } = useCart();
  const { products } = useProducts();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <li
              key={product.id}
              className="group relative list-none"
              onClick={() => addItem(product)}
            >
              <div className="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageSrc}
                  alt="image alt"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <button>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </button>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Color </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
