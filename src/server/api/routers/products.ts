import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { prisma } from "@/server/db";
import { Product } from "@/features/products/types/product";

export const productsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return [] as Product[];
  }),

  byId: publicProcedure.query(({ input }) => {}),

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
