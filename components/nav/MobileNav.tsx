"use client"

import { useRouter } from "next/navigation"
import { TranslateService } from "@/lib/services/translate.service"
import { navItems } from "@/constants/navItems"
import NavItem from "./NavItem"
import { AuthService } from "@/lib/services/auth.service"

const MobileNav = () => {
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
    <nav className="w-full bg-black xl:hidden h-[60px] rounded-t-[25px] fixed bottom-0 z-[8000] items-center flex">
      <div className="flex w-full justify-around px-[5vw] md:px-[10vw]">
        {navItems.slice(1, 5).map(({ href, icon, alt, action }, i) => (
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
  )
}

export default MobileNav
