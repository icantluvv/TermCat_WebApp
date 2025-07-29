import React from "react"
import clsx from "clsx"

type PageWrapperProps = {
  children: React.ReactNode
  className?: string
}

const PageWrapper = ({ children, className }: PageWrapperProps) => {
  return (
    <main
      className={clsx("min-h-[100svh] w-full relative px-[16px] md:px-[32px] xl:px-[80px] flex justify-center", className)}>
      {children}
    </main>
  )
}

export default PageWrapper