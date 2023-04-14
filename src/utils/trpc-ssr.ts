import superjson from "superjson";

import { appRouter } from "@/server/api/root";
import { createProxySSGHelpers } from "@trpc/react-query/ssg";

import { prisma } from "@/server/db";

export const apiSSG = createProxySSGHelpers({
  router: appRouter,
  ctx: { prisma },
  transformer: superjson,
});
