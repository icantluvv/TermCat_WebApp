import React from "react"
import clsx from "clsx"

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  return <div className={clsx("max-w-[1440px] w-full px-[16px] md:px-[32px] xl:px-[80px]", className)}>{children}</div>
}

export default Container
