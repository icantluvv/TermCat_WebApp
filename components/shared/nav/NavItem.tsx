"use client"

import Image from "next/image"
import Link from "next/link"

interface NavItemProps {
  href?: string
  icon: string
  alt: string
  onClick?: () => void
}

const NavItem = ({ href, icon, alt, onClick }: NavItemProps) => {
  const classes = "flex justify-center  items-center"

  if (onClick) {
    return (
      <button onClick={onClick} className={classes} aria-label={alt}>
        <Image
          src={icon}
          alt={alt}
          className="w-[48px] h-[48px] hover:opacity-70 transition-all"
        />
      </button>
    )
  }

  return (
    <Link href={href || "#"} className={classes} aria-label={alt}>
      <Image
        src={icon}
        alt={alt}
        className="w-[48px] h-[48px] hover:opacity-70 transition-all"
      />
    </Link>
  )
}

export default NavItem
