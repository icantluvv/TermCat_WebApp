import { create } from "zustand"

interface ModalState {
  showErrorModal: boolean
  openErrorModal: () => void
  closeErrorModal: () => void
}

export const useModalStore = create<ModalState>((set) => ({
  showErrorModal: false,
  openErrorModal: () => set({ showErrorModal: true }),
  closeErrorModal: () => set({ showErrorModal: false })
}))
