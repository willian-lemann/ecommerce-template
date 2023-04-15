import { type Product } from "@/features/products/types/product";

export type ProductStore = {
  products: Product[];
  setProducts(products: Product[]): void;
  update(id: string, product: Product): Promise<void>;
  create(newProduct: Product): Promise<void>;
};
