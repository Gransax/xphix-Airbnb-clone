import { create } from "zustand";

type useRentModal = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useRentModal = create<useRentModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRentModal;
