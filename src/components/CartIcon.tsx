import { useCart } from "@/features/cart/hooks/use-cart";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";

export function CartIcon() {
  const { toggle, totalItems } = useCart();

  return (
    <div className="ml-4 flow-root lg:ml-6" onClick={toggle}>
      <a href="#" className="group -m-2 flex items-center p-2">
        <ShoppingBagIcon
          className="h-6 w-6 flex-shrink-0 "
          aria-hidden="true"
        />
        {totalItems > 0 ? (
          <span className="ml-2 text-sm font-medium">{totalItems}</span>
        ) : null}
        <span className="sr-only">items in cart, view bag</span>
      </a>
    </div>
  );
}
