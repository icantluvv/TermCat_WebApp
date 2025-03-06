import Link from "next/link"
import React from "react"
import Image from "next/image"

import nav_logo from "@/public/images/sidebar/nav_logo.svg"
import home from "@/public/images/sidebar/home.svg"
import profile from "@/public/images/sidebar/profile.svg"
import chat from "@/public/images/sidebar/chat.svg"
import history from "@/public/images/sidebar/history.svg"
import quit from "@/public/images/sidebar/quit.svg"

// Nav data
const navItems = [
  { href: "/", icon: home, alt: "Home" },
  { href: "/chat", icon: chat, alt: "Chat" },
  { href: "/history", icon: history, alt: "History" },
  { href: "/profile", icon: profile, alt: "Profile" }
]

const NavItem = ({
  href,
  icon,
  alt
}: {
  href: string
  icon: string
  alt: string
}) => (
  <Link href={href}>
    <Image
      src={icon}
      width={48}
      height={48}
      alt={alt}
      className="hover:opacity-70 transition-all"
    />
  </Link>
)

const Navigation = () => {
  return (
    <>
      {/* Desktop navigation */}
      <div className="w-[8%] hidden xl:flex fixed left-0 top-0 justify-end h-screen items-center">
        <nav className="flex flex-col bg-black h-[6vh] xl:h-[65vh] w-full rounded-t-[50px] xl:rounded-[50px] items-center py-[48px] max-w-[96px] flex-grow gap-x-6">
          <NavItem href="/" icon={nav_logo} alt="Logo" />
          <div className="flex flex-col flex-1 gap-y-[24px] justify-center">
            {navItems.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </div>
          <NavItem href="#" icon={quit} alt="Quit" />
        </nav>
      </div>

      {/* Mobile navigation */}
      <div className="w-full xl:hidden h-[6vh] fixed bottom-0 z-[5000]">
        <nav className="flex bg-black h-[6vh] w-full rounded-t-[50px] items-center">
          <div className="flex flex-1 gap-[10vw] justify-center">
            {navItems.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navigation
