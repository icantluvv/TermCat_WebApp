import React from "react"
import Link from "next/link"

interface BasicLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

function BasicLink({ href, children, className = "" }: BasicLinkProps) {
  return (
    <Link href={href} className={`hover:opacity-80 hover:underline-offset-2 transition-opacity ${className}`}>
      {children}
    </Link>
  )
}

export default BasicLink
