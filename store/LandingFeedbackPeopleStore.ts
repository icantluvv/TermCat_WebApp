import { create } from "zustand"

interface FeedbackStore {
  activeIndex: number
  setActiveIndex: (index: number) => void
  next: (length: number) => void
  prev: (length: number) => void
}

export const useFeedbackStore = create<FeedbackStore>((set, get) => ({
  activeIndex: 0,
  setActiveIndex: (index) => set({ activeIndex: index }),
  next: (length) =>
    set((state) => ({
      activeIndex: (state.activeIndex + 1) % length
    })),
  prev: (length) =>
    set((state) => ({
      activeIndex: (state.activeIndex - 1 + length) % length
    }))
}))
