import { create } from "zustand"

interface PromoState {
  isPromoModalOpen: boolean
  openPromoModal: () => void
  closePromoModal: () => void
}

export const usePromoStore = create<PromoState>((set) => ({
  isPromoModalOpen: false,
  openPromoModal: () => set({ isPromoModalOpen: true }),
  closePromoModal: () => set({ isPromoModalOpen: false })
}))
