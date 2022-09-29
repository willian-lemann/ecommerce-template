import { parseCookies } from "nookies";
import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react-hooks";

import { useCart } from "./useCart";
import { Product } from "../../models/product";

const storageKey = process.env.NEXT_PUBLIC_CART_STORAGE_KEY as string;

describe("test useCart hook", () => {
  const { result } = renderHook(useCart);

  it("should add an item to the cart", () => {
    const item: Product = {
      id: "id",
      image: "test image",
      name: "test name",
      price: 100,
    };

    expect(result.current.inCart(item.id)).toBeFalsy();

    result.current.addItem(item);

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0].quantity).toBe(1);
    expect(result.current.inCart(item.id)).toBeTruthy();
  });

  it("should open modal when add an item", () => {
    const item: Product = {
      id: "id",
      image: "test image",
      name: "test name",
      price: 100,
    };

    result.current.addItem(item);
    expect(result.current.isOpen).toBeTruthy();
  });

  it("should add an item to the local storage cart", () => {
    const item: Product = {
      id: "id",
      image: "test image",
      name: "test name",
      price: 100,
    };

    result.current.addItem(item);

    const { [storageKey]: storageData } = parseCookies(undefined);

    const storageItems = JSON.parse(storageData) as Product[];
    expect(storageItems).toHaveLength(1);
  });

  it("should not add an item with the same id", () => {
    const item: Product = {
      id: "id",
      image: "test image",
      name: "test name",
      price: 100,
    };
    const item2: Product = {
      id: "id",
      image: "test image",
      name: "test name",
      price: 100,
    };

    result.current.addItem(item);
    result.current.addItem(item2);

    expect(result.current.inCart(item2.id)).toBeTruthy();
    expect(result.current.items).toHaveLength(1);
  });

  it("should update cart item quantity", () => {
    const item: Product = {
      id: "id",
      image: "test image",
      name: "test name",
      price: 100,
    };
  });

  it("should remove an item from the cart", () => {
    const item: Product = {
      id: "id",
      image: "test image",
      name: "test name",
      price: 100,
      quantity: 1,
    };

    result.current.addItem(item);
    result.current.removeItem(item.id);
    expect(result.current.items).toHaveLength(0);
  });

  it("should remove an item from the local storage cart", () => {
    const item: Product = {
      id: "id",
      image: "test image",
      name: "test name",
      price: 100,
    };

    result.current.addItem(item);
    result.current.removeItem(item.id);

    const { [storageKey]: storageData } = parseCookies(undefined);

    const storageItems = JSON.parse(storageData) as Product[];
    expect(storageItems).toHaveLength(0);
  });

  it("should close cart modal when remove the last item from cart", () => {
    const item: Product = {
      id: "id",
      image: "test image",
      name: "test name",
      price: 100,
    };
    const item2: Product = {
      id: "id2",
      image: "test image",
      name: "test name",
      price: 100,
    };

    result.current.addItem(item);
    result.current.addItem(item2);

    result.current.toggle();

    result.current.removeItem(item2.id);
    result.current.removeItem(item.id);
    expect(result.current.isOpen).toBeFalsy();
  });
});
