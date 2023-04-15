import { Dialog } from "@headlessui/react";
import { Content } from "./Content";
import { useEditModal } from "@/features/admin/hooks/use-edit-modal";
import { useAddProductModal } from "../hooks/use-add-modal";

export function AddProduct() {
  const { isAddProductModal, closeProductModal } = useAddProductModal();

  return (
    <Dialog
      open={isAddProductModal}
      onClose={closeProductModal}
      className="relative z-50"
    >
      <Content />
    </Dialog>
  );
}
