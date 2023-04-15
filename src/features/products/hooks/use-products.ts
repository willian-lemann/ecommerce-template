import { create, useStore } from "@/lib/store";
import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { ProductStore } from "../types/product-store";

const productsStore = create<ProductStore>()((set, get) => ({
  products: [],
  setProducts: (products) => set({ products }),
  create: async (product) => {
    const { mutateAsync } = api.products.create.useMutation();

    const newProductCreated = await mutateAsync({
      name: product.name,
      description: String(product.description),
      price: Number(product.price),
    });

    const addNewProducts = [...get().products, newProductCreated];

    set({ products: addNewProducts });
  },
  update: async (id, product) => {
    const { mutateAsync } = api.products.update.useMutation();

    const newProductUpdated = await mutateAsync({
      id,
      description: String(product.description),
      name: product.name,
      priceId: String(product.default_price),
    });

    const newProducts = get().products.map((productItem) => {
      if (productItem.id === newProductUpdated.id) {
        return {
          ...productItem,
          ...newProductUpdated,
        };
      }

      return productItem;
    });

    set({ products: newProducts });
  },
}));

export function useProducts() {
  const { setProducts, ...store } = productsStore((state) => state);

  const { isLoading } = api.products.getAll.useQuery(undefined, {
    onSuccess: (newProducts) => {
      setProducts(newProducts);
    },
  });

  return {
    ...store,
    isLoading,
  };
}
