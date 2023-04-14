import { Cart } from "@/features/cart/types/cart";

export type CartStore = {
  isOpen: boolean;
  items: Cart[];
  totalItems: number;
  totalAmount: number;
  isEmpty: boolean;
  addItem: (item: Cart) => void;
  updateCartItemQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  emptyCart: () => void;
  getItem: (id: string) => Cart | null;
  inCart: (id: string) => boolean;
  toggle: () => void;
  loadItemsFromStorage(): void;
};
