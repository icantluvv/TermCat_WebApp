"use client"
import Link from "next/link"
import React from "react"
import Image from "next/image"

import nav_logo from "@/public/images/sidebar/nav_logo.svg"
import home from "@/public/images/sidebar/home.svg"
import profile from "@/public/images/sidebar/profile.svg"
import chat from "@/public/images/sidebar/chat.svg"
import history from "@/public/images/sidebar/history.svg"
import quit from "@/public/images/sidebar/quit.svg"
import { AuthService } from "@/lib/services/auth.service"

// Nav data
const navItems = [
  { href: "/app/home", icon: home, alt: "Home" },
  { href: "/app/chat", icon: chat, alt: "Chat" },
  { href: "/app/history", icon: history, alt: "History" },
  { href: "/app/profile", icon: profile, alt: "Profile" }
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
  <Link href={href} className="flex justify-center items-center">
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
      <div className="fixed h-screen lg:w-[12%] xl:w-[10%] hidden lg:flex left-0 top-0 justify-center items-center z-[5000]">
        <nav className="flex flex-col bg-black lg:h-[65vh] max-h-[600px] min-h-[500px] w-full rounded-t-[50px] lg:rounded-[50px] items-center py-[48px] max-w-[96px] flex-grow gap-x-6">
          <NavItem href="/" icon={nav_logo} alt="Logo" />
          <div className="flex flex-col flex-1 gap-y-[24px] justify-center">
            {navItems.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </div>
          <button
            onClick={() => handleLogout()}
            className="flex justify-center items-center"
          >
            <Image
              src={quit}
              width={48}
              height={48}
              alt={quit}
              className="hover:opacity-70 transition-all"
            />
          </button>
        </nav>
      </div>

      {/* Mobile navigation */}
      <div className="w-full lg:hidden h-[6vh] min-h-[50px] fixed bottom-0 z-[8000]">
        <nav className="flex bg-black h-full w-full rounded-t-[25px] items-center">
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

const handleLogout = async () => {
  await AuthService.getInstance().logout()
  window.location.href = "/login"
}
