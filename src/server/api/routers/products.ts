import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

import { ecommerceApi } from "@/lib/ecommerce";
import { Product } from "@/features/products/types/product";
import { formatPrice } from "@/utils/format-price";
import { retriveProductPrice } from "@/utils/retrive-product-price";

export const productsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const products = await ecommerceApi.products.list();

    const mappedProductsWithPrice = await Promise.all(
      products.data.map(retriveProductPrice)
    );

    return mappedProductsWithPrice;
  }),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const { id } = input;

      const product = await ecommerceApi.products.retrieve(id);

      const mappedProductWithPrice = retriveProductPrice(product);

      return mappedProductWithPrice;
    }),

  update: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input }) => {}),

  delete: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input }) => {}),

  create: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input }) => {}),
});
