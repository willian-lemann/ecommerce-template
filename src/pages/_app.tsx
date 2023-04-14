import { type AppType } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import { Cart } from "@/features/cart/Cart";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Cart />
      <ReactQueryDevtools />
    </>
  );
};

export default api.withTRPC(MyApp);
