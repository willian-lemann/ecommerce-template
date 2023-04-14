import { Product } from "@/features/products/types/product";
import { ecommerceApi } from "@/lib/ecommerce";
import { formatPrice } from "./format-price";

export async function retriveProductPrice(product: Product) {
  if (!product.default_price) {
    return product;
  }

  const price = await ecommerceApi.prices.retrieve(
    String(product.default_price)
  );

  if (!price.unit_amount) {
    return product;
  }

  return {
    ...product,
    default_price: formatPrice(price.unit_amount),
  };
}
