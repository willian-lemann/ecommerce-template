import { parseCookies, setCookie } from "nookies";
import { useEffect, useMemo } from "react";
import { Cart } from "@/features/cart/types/cart";

import { create } from "@/lib/store";
import { CartStore } from "../types/cart-store";

const storageKey = "@ecommerce.cart";

const cartStore = create<CartStore>()((set, get) => ({
  isOpen: false,
  isEmpty: false,
  items: [],
  totalAmount: 0,
  totalItems: 0,
  inCart: (id) => {
    const state = get();
    const productItem = state.items.find((item) => item.id === id);
    return productItem !== undefined;
  },
  addItem: (newCartItem) => {
    const state = get();

    if (state.inCart(newCartItem.id)) return;

    const newItem = { ...newCartItem, quantity: 1 };

    set((state) => ({ items: [...state.items, newItem] }));

    setCookie(undefined, storageKey, JSON.stringify([...state.items, newItem]));

    set({ isOpen: true });
  },

  getItem: (id) => {
    const state = get();
    const item = state.items.find((item) => item.id === id);
    return item || null;
  },

  removeItem: (id) => {
    const state = get();

    const filteredItems = state.items.filter((cartItem) => cartItem.id !== id);
    set({ items: filteredItems });

    const { [storageKey]: storageData } = parseCookies(undefined);

    if (storageData) {
      const storageItems = JSON.parse(storageData) as Cart[];

      setCookie(
        undefined,
        storageKey,
        JSON.stringify(storageItems.filter((item) => item.id !== id))
      );
    }

    if (state.items.length === 1) {
      state.toggle();
    }
  },
  emptyCart: () => {
    set({ items: [] });
  },

  toggle: () => set((state) => ({ isOpen: !state.isOpen })),

  updateCartItemQuantity: (id, quantity) => {
    const state = get();
    const newCartItems = state.items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: quantity < 1 ? 1 : quantity,
        };
      }

      return item;
    });

    set({ items: newCartItems });
    setCookie(undefined, storageKey, JSON.stringify(newCartItems));
  },

  loadItemsFromStorage: () => {
    const { [storageKey]: storageData } = parseCookies(undefined);

    if (storageData) {
      const storageItems = JSON.parse(storageData) as Cart[];
      set({ items: storageItems });
    }
  },
}));

export const useCart = () => {
  const state = cartStore((state) => state);

  const isEmpty = useMemo(() => state.items.length === 0, [state.items]);
  const totalItems = useMemo(() => state.items.length, [state.items]);
  const totalAmount = useMemo(() => {
    const eachItemAmount = state.items.flatMap(
      (item) => item.quantity * Number(item.price)
    );
    return eachItemAmount.reduce((previous, next) => previous + next, 0);
  }, [state.items]);

  useEffect(() => {
    state.loadItemsFromStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ...state, isEmpty, totalItems, totalAmount };
};
