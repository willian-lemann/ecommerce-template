import "@shopify/shopify-api/adapters/node";

import "@shopify/shopify-api/adapters/node";
import { shopifyApi, LATEST_API_VERSION } from "@shopify/shopify-api";

const shopify = shopifyApi({
  apiKey: process.env.API_KEY as string,
  apiSecretKey: process.env.API_SECRET_KEY as string,
  scopes: ["read_products"],
  hostName: process.env.HOSTNAME as string,
  apiVersion: LATEST_API_VERSION,
  isEmbeddedApp: false,
});

export const ecommerceApi = shopify;
