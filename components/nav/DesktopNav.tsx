"use client"
import Image from "next/image"
import NavItem from "./NavItem"
import { AuthService } from "@/lib/services/auth.service"
import nav_logo from "@/public/images/sidebar/nav_logo.svg"
import quit from "@/public/images/sidebar/quit.svg"

const DesktopNav = ({ links }: NavigationProps) => {
  return (
    <aside className="fixed h-screen w-[6%] items-center hidden xl:flex">
      <nav className="w-full bg-PrimaryBlack rounded-[100px] py-[48px] px-[24px] flex flex-col gap-y-[70px]">
        <NavItem href="/" icon={nav_logo} alt="Logo" />
        <div className="flex flex-col gap-y-[12px]">
          {links.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
        </div>
        <button
          onClick={() => handleLogout()}
          className="flex justify-center items-center"
        >
          <Image
            src={quit}
            alt={quit}
            className="w-[48px] h-[48px] hover:opacity-70 transition-all"
          />
        </button>
      </nav>
    </aside>
  )
}

export default DesktopNav

const handleLogout = async () => {
  await AuthService.getInstance().logout()
  window.location.href = "/login"
}
