'use client'
import Image from "next/image"
import NavItem from "./NavItem"
import { AuthService } from "@/lib/services/auth.service"
import nav_logo from "@/public/images/sidebar/nav_logo.svg"
import quit from "@/public/images/sidebar/quit.svg"

const DesktopNav = ({ links }: NavigationProps) => {
  return (
    <aside className="fixed h-screen lg:w-[12%] xl:w-[10%] hidden lg:flex left-0 top-0 justify-center items-center z-[5000]">
      <nav className="flex flex-col bg-black lg:h-[65vh] max-h-[600px] min-h-[500px] w-full rounded-t-[50px] lg:rounded-[50px] items-center py-[48px] max-w-[96px] flex-grow gap-x-6">
        <NavItem href="/" icon={nav_logo} alt="Logo" />
        <div className="flex flex-col flex-1 gap-y-[24px] justify-center">
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
            width={48}
            height={48}
            alt={quit}
            className="hover:opacity-70 transition-all"
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
