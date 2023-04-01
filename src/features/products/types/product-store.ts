import { type Product } from "@/features/products/types/product";

export type ProductStore = {
  products: Product[];
  getAll(): Promise<void>;
  update(id: string, product: Product): Promise<void>;
  create(newProduct: Product): Promise<void>;
  delete(id: string): Promise<void>;
};
