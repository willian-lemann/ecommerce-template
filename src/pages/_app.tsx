import { type AppType } from "next/app";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import { CartProvider } from "@/features/cart/hooks";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Component {...pageProps} />
      {}
    </CartProvider>
  );
};

export default api.withTRPC(MyApp);
