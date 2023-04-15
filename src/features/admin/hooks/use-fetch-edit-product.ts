import { api } from "@/utils/api";

export function useFetchEditProduct(id: string) {
  const { data, isLoading } = api.products.byId.useQuery({ id });

  return { product: !data ? null : data, isLoading };
}
