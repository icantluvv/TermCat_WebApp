import { ReactNode } from "react"

const SectionWrapper = ({ className, layout }: { className: string; layout: ReactNode }) => (
  <div className={className}>{layout}</div>
)
export default SectionWrapper
