import { useState } from "react"

export const useSlider = (length: number) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % length)
  }

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + length) % length)
  }

  return { activeIndex, next, prev }
}
