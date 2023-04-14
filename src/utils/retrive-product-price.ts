import { Product } from "@/features/products/types/product";
import { ecommerceApi } from "@/lib/ecommerce";
import { formatPrice } from "@/utils/format-price";

export async function retriveProductPrice(product: Product) {
  const price = await ecommerceApi.prices.retrieve(
    String(product.default_price)
  );

  return {
    ...product,
    price: formatPrice(Number(price.unit_amount)),
  };
}
