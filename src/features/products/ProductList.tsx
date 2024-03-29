import Image from "next/image";
import { useRouter } from "next/router";
import { useProducts } from "./hooks/use-products";

import { useQueryClient } from "@tanstack/react-query";
import { api } from "@/utils/api";

export const ProductList = () => {
  const router = useRouter();
  const { products } = useProducts();
  const trpcContext = api.useContext();

  function handleProductDetails(id: string) {
    router.push(`/produto/${id}`);
  }

  // async function prefetchWhenHover(id: string) {
  //   await trpcContext.products.byId.prefetch({ id });
  // }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <li
              key={product.id}
              className="group relative list-none"
              onClick={() => handleProductDetails(product.id)}
            >
              <div className="min-h-80 aspect-h-1 aspect-w-1 relative w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={String(product.images[0])}
                  alt="image alt"
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110 lg:h-full lg:w-full"
                  fill
                  priority
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
                  <p className="mt-1 text-sm text-gray-500">
                    {product.description}
                  </p>
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
