import { create } from "@/lib/store";
import { DeleteModalStore } from "../types/delete-modal-store";

const deleteModalStore = create<DeleteModalStore>()((set) => ({
  isDeleteOpen: false,
  id: "",
  openDeleteModal: (id) => set({ isDeleteOpen: true, id }),
  closeDeleteModal: () => set({ isDeleteOpen: false }),
}));

export function useDeleteModal() {
  const store = deleteModalStore((state) => state);

  return {
    ...store,
  };
}
