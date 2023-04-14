import { api } from "@/utils/api";

export function useProductDetails(id: string) {
  const { data } = api.products.byId.useQuery({ id });

  return { product: !data ? null : data };
}
