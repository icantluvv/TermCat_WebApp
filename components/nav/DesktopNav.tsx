"use client"

import { useRouter } from "next/navigation"
import { TranslateService } from "@/lib/services/translate.service"
import { AuthService } from "@/lib/services/auth.service"
import NavItem from "./NavItem"
import { navItems } from "@/constants/navItems"

const DesktopNav = () => {
  const router = useRouter()
  const translateService = TranslateService.getInstance()

  const actions: Record<string, () => void> = {
    newDialog: async () => {
      const dialog = await translateService.createDialog()
      router.push(`/WebApp/dialogs/${dialog.id}`)
    },
    logout: async () => {
      await AuthService.getInstance().logout()
      window.location.href = "/login"
    }
  }

  return (
    <aside className="fixed h-screen w-[6%] items-center hidden xl:flex z-[9000]">
      <nav className="w-full bg-PrimaryBlack rounded-[100px] py-[48px] px-[24px] flex flex-col gap-y-[70px]">
        <div className="flex flex-col items-center gap-y-[40px]">
          {navItems.map(({ href, icon, alt, action }, i) => (
            <NavItem
              key={i}
              href={href}
              icon={icon}
              alt={alt}
              onClick={action ? actions[action] : undefined}
            />
          ))}
        </div>
      </nav>
    </aside>
  )
}

export default DesktopNav
