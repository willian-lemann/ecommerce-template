import { useProducts } from "@/features/products/hooks/use-products";
import { ecommerceApi } from "@/lib/ecommerce";
import { api } from "@/utils/api";

import axios from "axios";

export default function Admin() {
  const { data } = api.products.getAll.useQuery();

  // async function login() {
  // const teste =   ecommerceApi.rest.Product.all();

  // console.log
  // }

  return (
    <div>
      <h1>products</h1>

      <button>login</button>

      <ul>
        {data?.map((product) => (
          <li key={product.id}>name</li>
        ))}
      </ul>
    </div>
  );
}
