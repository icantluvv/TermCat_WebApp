import React from "react"
import clsx from "clsx"

type PageWrapperProps = {
  children: React.ReactNode
  className?: string
}

const PageWrapper = ({ children, className }: PageWrapperProps) => {
  return (
    <main className={clsx("min-h-[100svh] flex flex-col items-center relative overflow-hidden", className)}>
      {children}
    </main>
  )
}

export default PageWrapper
