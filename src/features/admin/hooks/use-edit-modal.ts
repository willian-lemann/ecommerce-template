import { create } from "@/lib/store";
import { EditModalStore } from "../types/edit-modal-store";

const editModalStore = create<EditModalStore>()((set, get) => ({
  isOpen: false,
  id: "",
  openModal: (id) => {
    set({ isOpen: true, id });
  },
  closeModal: () => set({ isOpen: false, id: "" }),
}));

export function useEditModal() {
  const store = editModalStore((state) => state);

  return { ...store };
}
