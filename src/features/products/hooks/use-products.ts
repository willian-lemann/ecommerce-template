import { create, useStore } from "@/lib/store";
import { api } from "@/utils/api";

import { ProductStore } from "../types/product-store";

const productsStore = create<ProductStore>()((set) => ({
  products: [],
  getAll: async () => {
    const { data } = api.products.getAll.useQuery();
    set({ products: data });
  },
  update: async (id, product) => {},
  delete: async (id) => {},
  create: async (product) => {},
}));

export function useProducts() {
  const store = productsStore((state) => state);
  return store;
}
