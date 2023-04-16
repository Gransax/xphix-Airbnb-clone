import { create } from "zustand";

type SeachModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useSeachModal = create<SeachModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSeachModal;
