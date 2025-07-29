import React from "react"
import clsx from "clsx"

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx("max-w-[1300px] w-full", className)}>
      {children}
    </div>
  )
}

export default Container