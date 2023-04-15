import { Dialog } from "@headlessui/react";
import { Content } from "./Content";
import { useEditModal } from "@/features/admin/hooks/use-edit-modal";

export function EditProduct() {
  const { closeModal, isOpen, id } = useEditModal();

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <Content id={id} />
    </Dialog>
  );
}
