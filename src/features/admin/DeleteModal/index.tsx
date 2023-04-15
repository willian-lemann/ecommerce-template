import { Dialog } from "@headlessui/react";
import { Content } from "./Content";
import { useEditModal } from "@/features/admin/hooks/use-edit-modal";
import { useDeleteModal } from "../hooks/use-delete-modal";

export function DeleteProduct() {
  const { isDeleteOpen, closeDeleteModal, id } = useDeleteModal();

  return (
    <Dialog
      open={isDeleteOpen}
      onClose={closeDeleteModal}
      className="relative z-50"
    >
      <Content id={id} />
    </Dialog>
  );
}
