import Stripe from "stripe";

export type Product = { price?: string } & Stripe.Product;
