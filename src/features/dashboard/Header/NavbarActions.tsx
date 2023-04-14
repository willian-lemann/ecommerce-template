import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

import { useEffect, useState } from "react";
import { useCart } from "@/features/cart/hooks/use-cart";
import { classnames } from "@/utils/classnames";
import { CartIcon } from "@/components/CartIcon";

export const NavbarActions = () => {
  return (
    <div className="ml-auto flex items-center">
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
        <a href="#" className="text-sm font-medium ">
          Sign in
        </a>
        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
        <a href="#" className="text-sm font-medium">
          Create account
        </a>
      </div>

      <CartIcon />
    </div>
  );
};
