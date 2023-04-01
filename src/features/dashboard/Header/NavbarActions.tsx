import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

import { useEffect, useState } from "react";
import { useCartContext } from "@/features/cart/hooks";
import { classnames } from "@/utils/classnames";

export const NavbarActions = () => {
  const { totalItems, toggle } = useCartContext();
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
        <a
          href="#"
          className="text-sm font-medium text-gray-700 hover:text-gray-800"
        >
          Sign in
        </a>
        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
        <a
          href="#"
          className="text-sm font-medium text-gray-700 hover:text-gray-800"
        >
          Create account
        </a>
      </div>

      <div className="flex lg:ml-6 lg:max-w-full">
        <a
          href="#"
          className="p-2 text-gray-400 hover:text-gray-500"
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

      {/* Cart */}
      <div className="ml-4 flow-root lg:ml-6" onClick={toggle}>
        <a href="#" className="group -m-2 flex items-center p-2">
          <ShoppingBagIcon
            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
            {totalItems}
          </span>
          <span className="sr-only">items in cart, view bag</span>
        </a>
      </div>
    </div>
  );
};
