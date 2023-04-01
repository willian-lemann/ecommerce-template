import { useCartContext } from "@/features/cart/hooks";

interface QuantityCounterProps {
  productId: string;
  quantity: number;
}

export const QuantityCounter = ({
  productId,
  quantity,
}: QuantityCounterProps) => {
  const { updateCartItemQuantity } = useCartContext();

  return (
    <div className="relative flex w-28 flex-row rounded-lg bg-transparent">
      <button
        onClick={() => updateCartItemQuantity(productId, quantity - 1)}
        data-action="decrement"
        className=" flex h-full w-20 cursor-pointer items-center justify-center rounded-l  bg-gray-50 text-gray-600 outline-none hover:bg-gray-100 hover:text-gray-700"
      >
        <span className="text-2xl font-thin">−</span>
      </button>

      <button
        onClick={() => updateCartItemQuantity(productId, quantity + 1)}
        data-action="increment"
        className=" h-full w-20 cursor-pointer rounded-r bg-gray-50 text-gray-600 outline-none hover:bg-gray-100 hover:text-gray-700"
      >
        <span className="text-2xl font-thin">+</span>
      </button>
    </div>
  );
};
