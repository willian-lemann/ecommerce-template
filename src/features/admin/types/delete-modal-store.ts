export type DeleteModalStore = {
  isDeleteOpen: boolean;
  id: string;
  openDeleteModal: (id: string) => void;
  closeDeleteModal: () => void;
};
