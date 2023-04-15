import { create } from "@/lib/store";
import { AddModalStore } from "../types/add-modal-store";

const addModalStore = create<AddModalStore>()((set) => ({
  isAddProductModal: false,
  openAddProductModal: () => set({ isAddProductModal: true }),
  closeProductModal: () => set({ isAddProductModal: false }),
}));

export function useAddProductModal() {
  const store = addModalStore((state) => state);

  return {
    ...store,
  };
}
