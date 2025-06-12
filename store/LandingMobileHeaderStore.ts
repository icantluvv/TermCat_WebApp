import { create } from "zustand"

interface LandingMobileHeaderState {
  isNavOpen: boolean
  toggleNav: () => void
}

export const useLandingMobileHeaderStore = create<LandingMobileHeaderState>(
  (set) => ({
    isNavOpen: false,
    toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen }))
  })
)
