import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

import { useEffect, useState } from "react";
import { useCart } from "@/features/cart/hooks/use-cart";
import { classnames } from "@/utils/classnames";
import { CartIcon } from "@/components/CartIcon";

export const NavbarActions = () => {
  const { totalItems, toggle } = useCart();
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [search, setSearch] = useState("");

  const handleInputBlur = () => {
    if (!search) {
      return setIsInputVisible(false);
    }

    setIsInputVisible(true);
  };

  useEffect(() => {
    if (search.length === 0) {
      setIsInputVisible(false);
    }
  }, [search]);

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

      <div className="flex lg:ml-6 lg:max-w-full">
        <a
          href="#"
          className="p-2"
          onClick={() => setIsInputVisible(!isInputVisible)}
        >
          <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
        </a>

        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          onBlur={handleInputBlur}
          className={classnames(
            "rounded-md border px-2 text-gray-400 outline-none",
            isInputVisible ? "max-w-full" : "sr-only max-w-0"
          )}
        />
      </div>

      <CartIcon />
    </div>
  );
};
