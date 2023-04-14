import Stripe from "stripe";
import { env } from "@/env.mjs";

const stripe = new Stripe(env.ECOMMERCE_API_KEY, {
  apiVersion: "2022-11-15",
});

export const ecommerceApi = stripe;
