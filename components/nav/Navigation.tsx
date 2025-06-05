import home from "@/public/images/sidebar/home.svg"
import profile from "@/public/images/sidebar/profile.svg"
import chat from "@/public/images/sidebar/chat.svg"
import history from "@/public/images/sidebar/history.svg"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
import { webAppLinks } from "@/constants/webAppLink"

const navItems = [
  { href: webAppLinks.home, icon: home, alt: "Home" },
  { href: webAppLinks.chat, icon: chat, alt: "Chat" },
  { href: webAppLinks.history, icon: history, alt: "History" },
  { href: webAppLinks.profile, icon: profile, alt: "Profile" }
]

const Navigation = () => {
  return (
    <>
      <DesktopNav links={navItems} />
      <MobileNav links={navItems} />
    </>
  )
}

export default Navigation
