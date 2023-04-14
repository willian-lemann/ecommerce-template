import { Product } from "@/features/products/types/product";

export type Cart = Product & {
  quantity: number;
};
