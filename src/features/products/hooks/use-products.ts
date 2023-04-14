import { create, useStore } from "@/lib/store";
import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { ProductStore } from "../types/product-store";

const productsStore = create<ProductStore>()((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  update: async (id, product) => {},
  delete: async (id) => {},
  create: async (product) => {},
}));

export function useProducts() {
  const { products, setProducts } = productsStore((state) => state);

  const { isLoading } = api.products.getAll.useQuery(undefined, {
    onSuccess: (newProducts) => {
      setProducts(newProducts);
    },
  });

  return {
    products,
    isLoading,
  };
}
