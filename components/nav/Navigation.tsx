import home from "@/public/images/sidebar/home.svg"
import profile from "@/public/images/sidebar/profile.svg"
import chat from "@/public/images/sidebar/chat.svg"
import history from "@/public/images/sidebar/history.svg"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

const navItems = [
  { href: "/app/home", icon: home, alt: "Home" },
  { href: "/app/chat", icon: chat, alt: "Chat" },
  { href: "/app/history", icon: history, alt: "History" },
  { href: "/app/profile", icon: profile, alt: "Profile" }
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
