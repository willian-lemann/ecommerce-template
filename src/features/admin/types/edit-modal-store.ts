export type EditModalStore = {
  isOpen: boolean;
  id: string;
  closeModal(): void;
  openModal(id: string): void;
};
